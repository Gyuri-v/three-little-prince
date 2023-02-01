#define PI 3.141592653589793
#define PI2 6.283185307179586

attribute float index;
attribute float size;

uniform sampler2D u_positions1;
uniform sampler2D u_positions2;
uniform sampler2D u_colors1;
uniform sampler2D u_colors2;

uniform float u_transition;
uniform float u_time;

uniform vec3 u_mouse;
uniform float u_mouseRadius;

varying vec4 v_color;

void main() {
  float progress = fract(u_transition); 

  // Color
  vec4 color = mix(texture2D(u_colors1, position.xy), texture2D(u_colors2, position.xy), progress);
  v_color = color;

  // Position
  vec3 _position1 = texture2D(u_positions1, position.xy).xyz;
  vec3 _position2 = texture2D(u_positions2, position.xy).xyz;
  vec3 _position = mix(_position1, _position2, progress);

  float displace = cos(index + u_time / 10.0) / 10.0;
  _position = (modelMatrix * vec4(_position.x, _position.y + displace, _position.z, 1.0)).xyz;

  // - mouse
	vec3 difference = _position - u_mouse;
	vec3 direction = normalize(difference);
	float distance = length(_position.xy - u_mouse.xy);
	if (displace < u_mouseRadius) {
		float force = clamp((u_mouseRadius / 2.0) / pow(displace, 3.0), 0.0, u_mouseRadius / 2.0);
		_position += direction * force;
	}

	vec4 mvPosition = viewMatrix * vec4(_position, 1.0);
	gl_Position = projectionMatrix * mvPosition;

  // Size
  gl_PointSize = size * ( 300.0 / - mvPosition.z );
}





