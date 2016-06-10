var myNum = -1;
var keycode;
var socket;
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

function addToServer( reason ) {
    var Playerq = new Object();
    Playerq.pos = vec3.create();
    Playerq.posx = Players[myNum].pos.x;
    Playerq.posy = Players[myNum].pos.y;
    Playerq.posz = Players[myNum].pos.z;
    Playerq.way = Players[myNum].way;
    Playerq.period = Players[myNum].period;
    Playerq.nick = Players[myNum].name;
    Playerq.src = Players[myNum].src;
    Playerq.num = myNum;
    socket.emit(reason, Playerq);
}

var flag = false;

function ClientStart() {
    socket = io();
    console.log("Hi");
    socket.on("add_player", function (data) {
        if (flag)
            return;
        flag = true;
        numOfPlayers = data.data;
        myNum = data.data;
        initCanvas();
        initGL(canvas);
        InitTime();
        initShaders();
        initBuffers();
        InitMap2();
        data.players[myNum].posx = 1 + myNum;
        data.players[myNum].posy = 2;
        data.players[myNum].posz = 0.2;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        for (var i = 1; i <= numOfPlayers; i++) {
            InitPlayer(i, data.players[i].posx, data.players[i].posy, data.players[i].posz, data.players[i].nick, data.players[i].src);
        }
        addToServer("new player");
        socket.on("add new player", function (data) {
            InitSpecialPlayer(data.num, data.posx, data.posy, data.posz, data.nick, data.src);
        });
        tick();
    });
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


    for (var i = 1; i <= numOfPlayers; i++)
        if (i != myNum)
            drawPlayer(i, Players[i].pos.x, Players[i].pos.y, Players[i].way + Players[i].period);
    MovePlayer(myNum);
}

function tick() {
    window.requestAnimationFrame(tick);
    TimeUpdate();
    socket.on("update positions", function (data) {
        Players[data.num].pos.x = data.posx;
        Players[data.num].pos.y = data.posy;
        Players[data.num].pos.z = data.posz;
        Players[data.num].way = data.way;
        Players[data.num].period = data.period;
    });
    drawScene();
}