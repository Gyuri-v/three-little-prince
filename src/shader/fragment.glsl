uniform sampler2D u_pointTexture;

varying vec4 v_color;

void main() {
  // 1. 텍스쳐로 불러오기
  // gl_FragColor = v_color * texture2D(u_pointTexture, gl_PointCoord);

  // 2. 동그랗게
  vec2 uv = gl_PointCoord - 0.5;
  float circle = step(length(uv), 0.5);
  gl_FragColor = vec4(vec3(circle), 1.0) * v_color;

  // 3. 빛 확산효과로
  // Light point
  // float strength = distance(gl_PointCoord, vec2(0.5));
  // strength = 1.0 - strength;
  // strength = pow(strength, 10.0);

  // // Final color
  // vec4 color = mix(vec4(0.0), v_color, strength);
  // gl_FragColor = color;

  // 4. 그냥 
  // gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);
}