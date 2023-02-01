import * as THREE from 'three';
import { ww, wh, camera } from './main';

const PI = Math.PI;
const PI2 = PI * 2;

// https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z
export const getWorldPositionFromScreenPosition = (function () {
  const vector = new THREE.Vector3();
  const position = new THREE.Vector3();
  return (x, y) => {
    vector.set((x / ww) * 2 - 1, -(y / wh) * 2 + 1, 0.5);
    vector.unproject(camera);
    vector.sub(camera.position).normalize();
    position.copy(camera.position).add(vector.multiplyScalar(-camera.position.z / vector.z));
    return new THREE.Vector3().copy(position);
  };
})();

// https://stackoverflow.com/a/35111029
export function nearestPowerOfTwoCeil(v) {
  var p = 2;
  while ((v >>= 1)) {
    p <<= 1;
  }
  return p;
}

// https://karthikkaranth.me/blog/generating-random-points-in-a-sphere/
export function getSphericalRandomPosition(multiplier) {
  let u = Math.random();
  let v = Math.random();
  let theta = u * 2.0 * PI;
  let phi = Math.acos(2.0 * v - 1.0);
  let r = Math.cbrt(Math.random());
  let sinPhi = Math.sin(phi);
  return [r * sinPhi * Math.cos(theta) * multiplier, r * sinPhi * Math.sin(theta) * multiplier, r * Math.cos(phi) * multiplier];
}

export function shuffleAttributes(arrays, itemSize) {
  const length = arrays[0].length / itemSize;
  const indexedArray = new Uint32Array(length);
  for (let i = 0; i < length; i++) {
    indexedArray[i] = i;
  }
  shuffle(indexedArray);

  const numArrays = arrays.length;
  const shuffledArrays = [];
  arrays.forEach(() => {
    shuffledArrays.push(new Float32Array(arrays[0].length));
  });

  for (let i = 0, index1, index2; i < length; i++) {
    index1 = i * itemSize;
    index2 = indexedArray[i] * itemSize;
    for (let j = 0; j < numArrays; j++) {
      for (let k = 0; k < itemSize; k++) {
        shuffledArrays[j][index1 + k] = arrays[j][index2 + k];
      }
    }
  }

  return shuffledArrays;
}

// https://bost.ocks.org/mike/shuffle/
export function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
