precision mediump float;


attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
varying vec2 UV;

void main() {
	gl_Position = vec4(aVertexPosition, 1.0);
	UV = aTextureCoord;
}
