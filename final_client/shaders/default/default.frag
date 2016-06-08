precision mediump float;

uniform sampler2D Sprite;
varying vec2 UV;

void main()
{
	gl_FragColor = texture2D(Sprite, UV);
	//gl_FragColor = vec4(UV, 0, 1);
}
