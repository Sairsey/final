/**
 * Created by VP1 on 09.06.2016.
 */

var textCtx = document.createElement("canvas").getContext("2d");

// Puts text in center of canvas.
function makeTextCanvas(text, width, height) {
    textCtx.canvas.width  = width;
    textCtx.canvas.height = height;
    textCtx.textAlign = "center";
    textCtx.font = "10px monospace";
    textCtx.textBaseline = "middle";
    textCtx.fillStyle = "black";
    textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height);
    textCtx.fillText(text, width / 2, height / 2);
    return textCtx.canvas;
}

function InitTextbuffer( no ) {
    Players[no].textnick.TextBuff = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.TextBuff);
    var vertices = [
        -1 / W_Field * 1.5, 1/ H_Field, 0,
        1/ W_Field * 1.5,  1/ H_Field, 0,
        -1/ W_Field * 1.5, -1/ H_Field, 0,
        1/ W_Field * 1.5, -1/ H_Field, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Players[no].textnick.TextBuff.itemSize = 3;
    Players[no].textnick.TextBuff.numItems = 4;

    Players[no].textnick.Textcoord = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.Textcoord);
    var textureCoords = [
        0, 0,
        1, 0,
        0, 1,
        1, 1
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].textnick.Textcoord.itemSize = 2;
    Players[no].textnick.Textcoord.numItems = 4;
}

function InitTextSpecialBuffer( no ) {
    Players[no].textnick.TextBuff = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.TextBuff);
    var vertices = [
        -1 / W_Field * 1.5, 1/ H_Field, 0,
        1/ W_Field * 1.5,  1/ H_Field, 0,
        -1/ W_Field * 1.5, -1/ H_Field, 0,
        1/ W_Field * 1.5, -1/ H_Field, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Players[no].textnick.TextBuff.itemSize = 3;
    Players[no].textnick.TextBuff.numItems = 4;

    Players[no].textnick.Textcoord = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.Textcoord);
    var textureCoords = [
        0, 1,
        1, 1,
        0, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].textnick.Textcoord.itemSize = 2;
    Players[no].textnick.Textcoord.numItems = 4;
}


var TextShader;

function InitTextshader( no ) {
    var vertexShader = getShader(gl, "shaders/text/text.vert", "vert");
    var fragmentShader = getShader(gl, "shaders/text/text.frag", "frag");

    TextShader = gl.createProgram();
    gl.attachShader(TextShader, fragmentShader);
    gl.attachShader(TextShader, vertexShader);
    gl.linkProgram(TextShader);

    if (!gl.getProgramParameter(TextShader, gl.LINK_STATUS)) {
        alert("Could not initialise player text shader");
    }

    gl.useProgram(TextShader);

    TextShader.vertexPositionAttribute = gl.getAttribLocation(TextShader, "aVertexPosition");
    gl.enableVertexAttribArray(TextShader.vertexPositionAttribute);

    TextShader.textureCoordAttribute = gl.getAttribLocation(TextShader, "aTextureCoord");
    gl.enableVertexAttribArray(TextShader.textureCoordAttribute);

    TextShader.samplerUniform = gl.getUniformLocation(TextShader, "Sprite");

    gl.useProgram(defaultshader);
}

function InitTextTexture(no) {
    // create text texture.
    var textCanvas = makeTextCanvas(Players[no].name, 50, 30);
    var textWidth  = textCanvas.width;
    var textHeight = textCanvas.height;
    Players[no].textnick.textTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, Players[no].textnick.textTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

function drawText(no) {
    gl.useProgram(TextShader);
    gl.disable(gl.BLEND);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Players[no].textnick.textTex);
    gl.uniform1i(TextShader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.TextBuff);
    gl.vertexAttribPointer(TextShader.vertexPositionAttribute, Players[no].textnick.TextBuff.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].textnick.Textcoord);
    gl.vertexAttribPointer(TextShader.textureCoordAttribute, Players[no].textnick.Textcoord.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [
        (Players[no].pos.x - 1.0) * (1.0 / W_Field * 2.0) - 1.0 + 1.0 / W_Field,
        (Players[no].pos.y - 1.0) * (1.0 / H_Field * 2.0) - 1.0 + 1.0 / H_Field * 3.3,
        0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(TextShader, "Matrix"), false, Matrix);


    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Players[no].textnick.TextBuff.numItems);

    gl.enable(gl.BLEND);
    gl.useProgram(defaultshader);
}


function InitPlayerText(no) {
    InitTextshader(no);
    InitTextTexture(no);
    InitTextbuffer(no);
}

function InitPlayerSpecialText(no) {
    InitTextshader(no);
    InitTextTexture(no);
    InitTextSpecialBuffer(no);
}
