/**
 * Created by VP1 on 08.06.2016.
 */
var Player1 = new Object();
var way = 1;
var period = 0;

function MovePlayer1() {
    switch (keycode) {
        case 38:
        {
            Player1.pos.y++;
            way = 13;
            period++;
            break;
        }
        case 40:
        {
            Player1.pos.y--;
            way = 1;
            period++;
            break;
        }
        case 39:
        {
            Player1.pos.x++;
            way = 9;
            period++;
            break;
        }
        case 37:
        {
            Player1.pos.x--;
            way = 5;
            period++;
            break;
        }
        default:
        {
            break;
        }
    }
    period %= 4;
    //period = Time % 4;

    if (Player1.pos.x <= 0)
        Player1.pos.x++;
    if (Player1.pos.y <= 0)
        Player1.pos.y++;
    if (Player1.pos.y > H_Field)
        Player1.pos.y--;
    if (Player1.pos.x > W_Field)
        Player1.pos.x--;


    drawPlayer1(Player1.pos.x, Player1.pos.y, way + period);
    //keycode = -1;
}

function InitPlayer1() {
    Player1.pos = vec3.create();
    Player1.pos.x = 1;
    Player1.pos.y = 20;
    InitPlayer1Buffer();
    InitPlayer1Shader();
    InitPlayer1Texture();
    Matrix = mat4.create();
}
function InitPlayer1Buffer() {
    Player1.rect = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    var vertices = [
        -0.05, 0.05, 0.2,
        0.05, 0.05, 0.2,
        -0.05, -0.05, 0.2,
        0.05, -0.05, 0.2
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Player1.rect.itemSize = 3;
    Player1.rect.numItems = 4;

    Player1.UV1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV1);
    var textureCoords = [
        0, 1,
        0.25, 1,
        0, 0.75,
        0.25, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV1.itemSize = 2;
    Player1.UV1.numItems = 4;

    Player1.UV2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV2);
    textureCoords = [
        0.25, 1,
        0.5, 1,
        0.25, 0.75,
        0.5, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV2.itemSize = 2;
    Player1.UV2.numItems = 4;

    Player1.UV3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV3);
    textureCoords = [
        0.5, 1,
        0.75, 1,
        0.5, 0.75,
        0.75, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV3.itemSize = 2;
    Player1.UV3.numItems = 4;

    Player1.UV4 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV4);
    textureCoords = [
        0.75, 1,
        1, 1,
        0.75, 0.75,
        1, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV4.itemSize = 2;
    Player1.UV4.numItems = 4;

    Player1.UV5 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV5);
    var textureCoords = [
        0, 0.75,
        0.25, 0.75,
        0, 0.5,
        0.25, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV5.itemSize = 2;
    Player1.UV5.numItems = 4;

    Player1.UV6 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV6);
    textureCoords = [
        0.25, 0.75,
        0.5, 0.75,
        0.25, 0.5,
        0.5, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV6.itemSize = 2;
    Player1.UV6.numItems = 4;

    Player1.UV7 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV7);
    textureCoords = [
        0.5, 0.75,
        0.75, 0.75,
        0.5, 0.5,
        0.75, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV7.itemSize = 2;
    Player1.UV7.numItems = 4;

    Player1.UV8 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV8);
    textureCoords = [
        0.75, 0.75,
        1, 0.75,
        0.75, 0.5,
        1, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV8.itemSize = 2;
    Player1.UV8.numItems = 4;

    Player1.UV9 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV9);
    var textureCoords = [
        0, 0.5,
        0.25, 0.5,
        0, 0.25,
        0.25, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV9.itemSize = 2;
    Player1.UV9.numItems = 4;

    Player1.UV10 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV10);
    textureCoords = [
        0.25, 0.5,
        0.5, 0.5,
        0.25, 0.25,
        0.5, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV10.itemSize = 2;
    Player1.UV10.numItems = 4;

    Player1.UV11 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV11);
    textureCoords = [
        0.5, 0.5,
        0.75, 0.5,
        0.5, 0.25,
        0.75, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV11.itemSize = 2;
    Player1.UV11.numItems = 4;

    Player1.UV12 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV12);
    textureCoords = [
        0.75, 0.5,
        1, 0.5,
        0.75, 0.25,
        1, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV12.itemSize = 2;
    Player1.UV12.numItems = 4;

    Player1.UV13 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV13);
    var textureCoords = [
        0, 0.25,
        0.25, 0.25,
        0, 0,
        0.25, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV13.itemSize = 2;
    Player1.UV13.numItems = 4;

    Player1.UV14 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV14);
    textureCoords = [
        0.25, 0.25,
        0.5, 0.25,
        0.25, 0,
        0.5, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV14.itemSize = 2;
    Player1.UV14.numItems = 4;

    Player1.UV15 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV15);
    textureCoords = [
        0.5, 0.25,
        0.75, 0.25,
        0.5, 0,
        0.75, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV15.itemSize = 2;
    Player1.UV15.numItems = 4;

    Player1.UV16 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV16);
    textureCoords = [
        0.75, 0.25,
        1, 0.25,
        0.75, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV16.itemSize = 2;
    Player1.UV16.numItems = 4;
}

function InitPlayer1Shader() {
    var vertexShader = getShader(gl, "shaders/player/player.vert", "vert");
    var fragmentShader = getShader(gl, "shaders/player/player.frag", "frag");

    Player1.shader = gl.createProgram();
    gl.attachShader(Player1.shader, fragmentShader);
    gl.attachShader(Player1.shader, vertexShader);
    gl.linkProgram(Player1.shader);

    if (!gl.getProgramParameter(Player1.shader, gl.LINK_STATUS)) {
        alert("Could not initialise player shader");
    }

    gl.useProgram(Player1.shader);

    Player1.shader.vertexPositionAttribute = gl.getAttribLocation(Player1.shader, "aVertexPosition");
    gl.enableVertexAttribArray(Player1.shader.vertexPositionAttribute);

    Player1.shader.textureCoordAttribute = gl.getAttribLocation(Player1.shader, "aTextureCoord");
    gl.enableVertexAttribArray(Player1.shader.textureCoordAttribute);

    Player1.shader.samplerUniform = gl.getUniformLocation(Player1.shader, "Sprite");

    gl.useProgram(defaultshader);
}

function InitPlayer1Texture() {
    Player1.texture = gl.createTexture();
    Player1.texture.image = new Image();
    Player1.texture.image.onload = function () {
        handleLoadedTexture(Player1.texture)
    };
    Player1.texture.image.src = "img/sprites/player1.png";
}

function drawPlayer1(positionx, positiony, nouv) {

    Player1.pos.x = positionx;
    Player1.pos.y = positiony;
    switch (nouv) {
        case 1:
            Draw1UV1();
            break;
        case 2:
            Draw1UV2();
            break;
        case 3:
            Draw1UV3();
            break;
        case 4:
            Draw1UV4();
            break;
        case 5:
            Draw1UV5();
            break;
        case 6:
            Draw1UV6();
            break;
        case 7:
            Draw1UV7();
            break;
        case 8:
            Draw1UV8();
            break;
        case 9:
            Draw1UV9();
            break;
        case 10:
            Draw1UV10();
            break;
        case 11:
            Draw1UV11();
            break;
        case 12:
            Draw1UV12();
            break;
        case 13:
            Draw1UV13();
            break;
        case 14:
            Draw1UV14();
            break;
        case 15:
            Draw1UV15();
            break;
        case 16:
            Draw1UV16();
            break;
    }
}

var Matrix;

function Draw1UV1() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);
    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV1);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV1.itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV2() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV2);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV2.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV3() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV3);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV3.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV4() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV4);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV4.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV5() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV5);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV5.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV6() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV6);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV6.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV7() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV7);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV7.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV8() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV8);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV8.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV9() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV9);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV9.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV10() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV10);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV10.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV11() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV11);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV11.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV12() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV12);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV12.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV13() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV13);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV13.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}

function Draw1UV14() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV14);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV14.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV15() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV15);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV15.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}
function Draw1UV16() {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV16);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV16.itemSize, gl.FLOAT, false, 0, 0);

    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * 0.1 - 0.95, (Player1.pos.y - 1) * 0.1 - 0.95, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);

    gl.useProgram(defaultshader);
}