precision mediump float;


attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
uniform mat4 Matrix;
varying vec2 UV;

void main() {
	gl_Position = Matrix * vec4(aVertexPosition, 1.0);
	UV = aTextureCoord;
}
