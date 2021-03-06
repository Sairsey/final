var keycode;
var canvas;
var gl;
var screen_square;
var screen_UV;
var W_Field = 32;
var H_Field = 16;
var StartTime;
var Time;

function InitTime() {
    var date = new Date();
    StartTime = date.getTime();
}

function TimeUpdate() {
    var date = new Date();
    Time = date.getTime() - StartTime;
}


function initCanvas() {
    var width = 32 * W_Field;
    var height = 32 * H_Field;
    canvas = document.getElementById("canvas");
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
}

function initGL(canvas) {
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    } catch (e) {
    }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

function initBuffers() {
    screen_square = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, screen_square);
    var vertices = [
        -1.0, 1.0, 0.5,
        1.0, 1.0, 0.5,
        -1.0, -1.0, 0.5,
        1.0, -1.0, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    screen_square.itemSize = 3;
    screen_square.numItems = 4;

    screen_UV = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, screen_UV);
    var textureCoords = [
        0, 1,
        1, 1,
        0, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    screen_UV.itemSize = 2;
    screen_UV.numItems = 4;

}

var defaultshader;

function readFile(path) {
    var File = new XMLHttpRequest();
    var txt = "";
    File.open("GET", path, false);
    File.send(null);
    txt = File.responseText;
    return txt;
}

function getShader(gl, path, type) {

    str = readFile(path);

    var shader;
    if (type == "frag") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (type == "vert") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }


    return shader;
}

function initShaders() {
    var fragmentShader = getShader(gl, "shaders/default/default.frag", "frag");
    var vertexShader = getShader(gl, "shaders/default/default.vert", "vert");

    defaultshader = gl.createProgram();
    gl.attachShader(defaultshader, fragmentShader);
    gl.attachShader(defaultshader, vertexShader);
    gl.linkProgram(defaultshader);

    if (!gl.getProgramParameter(defaultshader, gl.LINK_STATUS)) {
        alert("Could not initialise default shader");
    }

    gl.useProgram(defaultshader);

    defaultshader.vertexPositionAttribute = gl.getAttribLocation(defaultshader, "aVertexPosition");
    gl.enableVertexAttribArray(defaultshader.vertexPositionAttribute);


    defaultshader.textureCoordAttribute = gl.getAttribLocation(defaultshader, "aTextureCoord");
    gl.enableVertexAttribArray(defaultshader.textureCoordAttribute);

    defaultshader.samplerUniform = gl.getUniformLocation(defaultshader, "uSampler");
}

function handleLoadedTexture(texture) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
}

function ClientStart() {
    initCanvas();
    initGL(canvas);
    InitTime();
    initShaders();
    initBuffers();
    InitPlayer(1);
    InitPlayer2();
    LoadMapFromJSON(readFile("Maps/Map2.json"));

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    drawScene();
    tick();
}

function drawScene() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, screen_square);
    gl.bindTexture(gl.TEXTURE_2D, mapTexture);
    gl.uniform1i(defaultshader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, screen_square);
    gl.vertexAttribPointer(defaultshader.vertexPositionAttribute, screen_square.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, screen_UV);
    gl.vertexAttribPointer(defaultshader.textureCoordAttribute, screen_UV.itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, screen_square.numItems);
    MovePlayer(1);
    MovePlayer2();
}

function tick() {
    window.requestAnimationFrame(tick);
    TimeUpdate();
    drawScene();
}