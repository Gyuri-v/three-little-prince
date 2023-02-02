import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import gsap from 'gsap';

import vertexShader from '../shader/vertex.glsl';
import fragmentShader from '../shader/fragment.glsl';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { getSphericalRandomPosition, getWorldPositionFromScreenPosition, nearestPowerOfTwoCeil } from './functions';

const DEBUG = location.search.indexOf('debug') > -1;

export let ww, wh;
export let renderer, scene, camera, light, controls, clock;

const App = function () {
  let models;
  let numModels = 0;
  let numLoadedModels = 0;
  let numMaxParticles = 0;
  let pointMaterial;
  let timeline;

  const PI = Math.PI;
  const PI2 = PI * 2;

  const $container = document.querySelector('.container');
  let $canvas;

  const particleGroup = new THREE.Group();
  const particleInnerGroup = new THREE.Group();
  particleGroup.add(particleInnerGroup);

  const init = function () {
    // Window
    ww = window.innerWidth;
    wh = window.innerHeight;

    // Scene
    scene = new THREE.Scene();

    // Renderer
    renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor('#000', 1.0);
    renderer.setSize(ww, wh);
    $canvas = renderer.domElement;
    $container.appendChild($canvas);

    // Camera
    camera = new THREE.PerspectiveCamera(70, ww / wh, 1, 999);
    camera.position.set(0, 0, 50);
    scene.add(camera);

    // Light
    light = new THREE.AmbientLight('#fff', 1);
    scene.add(light);

    // Controls
    if (DEBUG) {
      controls = new OrbitControls(camera, $canvas);
      controls.addEventListener('change', render);
    }

    // Clock
    clock = new THREE.Clock();

    // Setting
    setModels();

    // Render
    render();

    // Loading
    THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      if (itemsLoaded === itemsTotal) {
        render();
      }
    };
  };

  const resize = function () {
    ww = window.innerWidth;
    wh = window.innerHeight;

    camera.aspect = ww / wh;
    camera.updateProjectionMatrix();

    renderer.setSize(ww, wh);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

    renderRequest();
  };

  // Setting -------------------
  const setModels = function () {
    // 모델 세팅
    models = [
      {
        name: 'chibiprince',
        setting: (geometry) => {
          geometry.scale(0.4, 0.4, 0.4);
          geometry.rotateX(-0.6);
        },
      },
      {
        name: 'airplanprince',
        setting: (geometry) => {
          geometry.scale(0.7, 0.7, 0.7);
          geometry.translate(-10, 10, 0);
        },
      },
      {
        name: 'rose',
        setting: (geometry) => {
          geometry.scale(0.35, 0.35, 0.35);
          geometry.translate(0, -2, 0);
        },
      },
      {
        name: 'boasnake',
        setting: (geometry) => {
          geometry.rotateY(-0.9);
          geometry.scale(0.7, 0.7, 0.7);
          geometry.translate(2, -10, 0);
        },
      },
      {
        name: 'escenaRey',
        setting: (geometry) => {
          geometry.scale(1.5, 1.5, 1.5);
          geometry.translate(0, -10, 0);
        },
      },
      {
        name: 'withfox',
        setting: (geometry) => {
          geometry.scale(0.6, 0.6, 0.6);
          // geometry.translate(0, -10, 0);
        },
      },
    ];
    numModels = models.length;
    numLoadedModels = 0;

    // 모델 로딩
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./resources/draco/');
    models.forEach((info, index) => {
      dracoLoader.load(`./resources/models/${info.name}.drc`, (geometry) => {
        info.setting && info.setting(geometry);

        const samplerCount = models[index].counts ? models[index].counts : (1 + Math.random() * 3).toFixed(2);
        const samplerArray = getModelSamplerPositions(geometry, samplerCount * 50000);
        info.positionsArray = samplerArray;

        numMaxParticles = Math.max(samplerArray.length, numMaxParticles);
        numLoadedModels++;

        if (numModels === numLoadedModels) {
          setParticle();
          setTimeline();
          setEvents();
          requestScroll();
        }

        geometry.dispose();
      });
    });
  };

  const setParticle = function () {
    // -- Material
    pointMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_positions1: { value: null },
        u_positions2: { value: null },
        u_colors1: { value: null },
        u_colors2: { value: null },
        u_transition: { value: 0 },
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector3(0, 0, 0) },
        u_mouseRadius: { value: 1.5 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true,
    });

    // -- Geometry
    const geometry = new THREE.BufferGeometry();
    const textureSize = nearestPowerOfTwoCeil(Math.sqrt(numMaxParticles));
    const textureArraySize = textureSize * textureSize * 4;
    const colorInside = new THREE.Color('#a6afc8');
    const colorOutside = new THREE.Color('#1b3984');

    // positions & colors
    const positions = new Float32Array(textureSize * textureSize * 3);
    for (let max = textureSize * textureSize, i = 0; i < max; i++) {
      positions[i * 3] = (i % textureSize) / textureSize;
      positions[i * 3 + 1] = i / textureSize / textureSize;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    models.forEach((info, index) => {
      // positions
      const positions = new Float32Array(textureArraySize);
      for (let values = info.positionsArray, i = 0, j = 0, randomPosition; i < textureArraySize; i += 4, j += 3) {
        if (!info.positionsArray[j] || !info.positionsArray[j + 1] || !info.positionsArray[j + 2]) {
          randomPosition = getSphericalRandomPosition(100);
        }
        positions[i] = info.positionsArray[j] || randomPosition[0];
        positions[i + 1] = info.positionsArray[j + 1] || randomPosition[1];
        positions[i + 2] = info.positionsArray[j + 2] || randomPosition[2];
      }

      // colors
      const colors = new Float32Array(textureArraySize);
      for (let values = info.colorsArray, i = 0; i < info.positionsArray.length; i += 4) {
        const radius = Math.random() * 5;
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / 5);

        colors[i] = mixedColor.r || 0;
        colors[i + 1] = mixedColor.g || 0;
        colors[i + 2] = mixedColor.b || 0;
        colors[i + 3] = 1;
      }

      const shuffledAttributes = [positions, colors];

      info.texturePositions = new THREE.DataTexture(shuffledAttributes[0], textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
      info.texturePositions.magFilter = THREE.NearestFilter;
      info.texturePositions.needsUpdate = true;
      delete info.positionsArray;
      info.textureColors = new THREE.DataTexture(shuffledAttributes[1], textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
      info.textureColors.magFilter = THREE.NearestFilter;
      info.textureColors.needsUpdate = true;
      delete info.colorsArray;
    });

    pointMaterial.uniforms.u_positions1.value = models[0].texturePositions;
    pointMaterial.uniforms.u_colors1.value = models[0].textureColors;

    // index
    const indices = new Float32Array(textureSize * textureSize);
    indices.forEach((v, i) => {
      indices[i] = i;
    });
    geometry.setAttribute('index', new THREE.BufferAttribute(indices, 1));

    // size
    const sizes = new Float32Array(textureSize * textureSize);
    sizes.forEach((v, i) => {
      sizes[i] = Math.random() * renderer.getPixelRatio() * 0.3;
    });
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // point
    const mesh = new THREE.Points(geometry, pointMaterial);
    particleInnerGroup.add(mesh);

    // add
    gsap.ticker.add(animate);
    scene.add(particleGroup);
  };

  const setTimeline = function () {
    const onTimelineUpdate = function () {
      const currentIndex = Math.floor(pointMaterial.uniforms.u_transition.value);
      const nextIndex = models[currentIndex + 1] ? currentIndex + 1 : currentIndex;
      pointMaterial.uniforms.u_positions1.value = models[currentIndex].texturePositions;
      pointMaterial.uniforms.u_colors1.value = models[currentIndex].textureColors;
      pointMaterial.uniforms.u_positions2.value = models[nextIndex].texturePositions;
      pointMaterial.uniforms.u_colors2.value = models[nextIndex].textureColors;
      render();
    };

    timeline = gsap.timeline({ paused: true, repeat: -1, yoyo: true, onUpdate: onTimelineUpdate });
    timeline.to(pointMaterial.uniforms.u_transition, 5, { value: 1, ease: 'cubic.inOut' });
    timeline.to(particleInnerGroup.rotation, 5.5, { y: PI2, ease: 'cubic.inOut' }, '<');
    timeline.to(pointMaterial.uniforms.u_transition, 5, { value: 2, ease: 'cubic.inOut' });
    timeline.to(particleInnerGroup.rotation, 5.5, { y: PI2 * 2, ease: 'cubic.inOut' }, '<');
    timeline.to(pointMaterial.uniforms.u_transition, 5, { value: 3, ease: 'cubic.inOut' });
    timeline.to(particleInnerGroup.rotation, 5.5, { y: PI2 * 3, ease: 'cubic.inOut' }, '<');
    timeline.to(pointMaterial.uniforms.u_transition, 5, { value: 4, ease: 'cubic.inOut' });
    timeline.to(particleInnerGroup.rotation, 5.5, { y: PI2 * 4, ease: 'cubic.inOut' }, '<');
    timeline.to(pointMaterial.uniforms.u_transition, 5, { value: 5, ease: 'cubic.inOut' });
    timeline.to(particleInnerGroup.rotation, 5.5, { y: PI2 * 5, ease: 'cubic.inOut' }, '<');
  };

  const setEvents = function () {
    // Scroll
    window.addEventListener('scroll', requestScroll);

    // Mouse move
    let mouseSphere, followMouseSphere;
    let pointerTween;
    let pointerScaleTween;
    let particleInnerTween;

    if (DEBUG) {
      mouseSphere = new THREE.Mesh(new THREE.SphereGeometry(pointMaterial.uniforms.u_mouseRadius.value, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }));
      scene.add(mouseSphere);

      followMouseSphere = function () {
        mouseSphere.position.copy(pointMaterial.uniforms.u_mouse.value);
        mouseSphere.scale.set(1, 1, 1);
        mouseSphere.scale.multiplyScalar(pointMaterial.uniforms.u_mouseRadius.value);
        render();
      };
    }

    document.documentElement.addEventListener('mousemove', function (e) {
      const worldPosition = getWorldPositionFromScreenPosition(e.clientX, e.clientY);

      pointerTween && pointerTween.kill();
      pointerTween = gsap.to(pointMaterial.uniforms.u_mouse.value, 0.7, { x: worldPosition.x, y: worldPosition.y, z: worldPosition.z, ease: 'quart.out', onUpdate: followMouseSphere });

      pointerScaleTween && pointerScaleTween.kill();
      pointerScaleTween = gsap.to(pointMaterial.uniforms.u_mouseRadius, 0.3, {
        value: 2,
        ease: 'quart.out',
        onUpdate: followMouseSphere,
        onComplete: () => {
          pointerScaleTween = gsap.to(pointMaterial.uniforms.u_mouseRadius, 1.5, { value: 1, ease: 'quad.out', onUpdate: followMouseSphere });
        },
      });

      particleInnerTween && particleInnerTween.kill();
      particleInnerTween = gsap.to(particleGroup.rotation, 2, { x: THREE.MathUtils.degToRad(worldPosition.y * -1.5), y: THREE.MathUtils.degToRad(worldPosition.x * -1), ease: 'quart.out' });
    });
  };

  // Get -------------------
  const getModelSamplerPositions = function (geometry, count) {
    const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());

    let countNum = count ? count : parameters.count;
    let sampler = new MeshSurfaceSampler(mesh).build();

    const tempPosition = new THREE.Vector3();
    const samplePoints = [];

    for (let i = 0; i < countNum; i++) {
      sampler.sample(tempPosition);
      samplePoints.push(tempPosition.x, tempPosition.y, tempPosition.z);
    }

    const pointArray = new Float32Array(samplePoints, 3);
    return pointArray;
  };

  // Animate -------------------
  const animate = function (time, deltaTime, frame) {
    pointMaterial.uniforms.u_time.value += deltaTime * 0.05;
    particleGroup.rotation.y += deltaTime * 0.0001;
    render();
  };

  // Scroll -------------------
  const requestScroll = function () {
    requestAnimationFrame(scroll);
  };
  const scroll = function () {
    const scrollTop = window.scrollY;
    const moveArea = $container.offsetHeight - wh;
    const percent = scrollTop / moveArea;
    timeline && timeline.progress(percent);
  };

  // Render -------------------
  const render = function () {
    renderer.render(scene, camera);
  };

  init();
  window.addEventListener('resize', resize);
};
window.addEventListener('load', App);
