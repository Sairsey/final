precision mediump float;


attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
varying vec2 UV;
uniform mat4 Matrix;

void main() {
	gl_Position = Matrix * vec4(aVertexPosition, 1.0);
	UV = aTextureCoord;
}
