/**
 * Created by VP1 on 08.06.2016.
 */
var Players =[];
var numOfPlayers = 1;

function InitPlayer(no, posx, posy, posz, name, src) {
    if (no < 1){
        return;
    }
    if (no > numOfPlayers)
        numOfPlayers = no;
    Players[no] = Object();
    Players[no].pos = vec3.create();
    Players[no].pos.x= posx;
    Players[no].pos.y= posy;
    Players[no].pos.z= posz;
    Players[no].way = 1;
    Players[no].active = true;
    Players[no].period = 0;
    Players[no].UV = [];
    Players[no].textnick = Object();
    Players[no].src = src;
    Players[no].name = name;
    InitPlayerText(no);
    InitPlayerBuffer(no);
    InitPlayerShader(no);
    InitPlayerTexture(no);
    Matrix = mat4.create();
}

function InitSpecialPlayer(no, posx, posy, posz, name, src) {
    if (no < 1){
        return;
    }
    if (no > numOfPlayers)
        numOfPlayers = no;
    Players[no] = Object();
    Players[no].pos = vec3.create();
    Players[no].pos.x= posx;
    Players[no].pos.y= posy;
    Players[no].pos.z= posz;
    Players[no].way = 1;
    Players[no].active = true;
    Players[no].period = 0;
    Players[no].UV = [];
    Players[no].textnick = Object();
    Players[no].src = src;
    Players[no].name = name;
    InitPlayerSpecialText(no);
    InitPlayerBuffer(no);
    InitPlayerShader(no);
    InitPlayerTexture(no);
    Matrix = mat4.create();
}


function InitPlayerBuffer(no) {
    Players[no].rect = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].rect);
    var vertices = [
        -1 / W_Field, 1/ H_Field, 0,
        1/ W_Field, 1/ H_Field, 0,
        -1/ W_Field, -1/ H_Field, 0,
        1/ W_Field, -1/ H_Field, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Players[no].rect.itemSize = 3;
    Players[no].rect.numItems = 4;

    Players[no].UV[1] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[1]);
    var textureCoords = [
        0, 1,
        0.25, 1,
        0, 0.75,
        0.25, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[1].itemSize = 2;
    Players[no].UV[1].numItems = 4;


    Players[no].UV[2] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[2]);
    textureCoords = [
        0.25, 1,
        0.5, 1,
        0.25, 0.75,
        0.5, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[2].itemSize = 2;
    Players[no].UV[2].numItems = 4;

    Players[no].UV[3] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[3]);
    textureCoords = [
        0.5, 1,
        0.75, 1,
        0.5, 0.75,
        0.75, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[3].itemSize = 2;
    Players[no].UV[3].numItems = 4;

    Players[no].UV[4] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[4]);
    textureCoords = [
        0.75, 1,
        1, 1,
        0.75, 0.75,
        1, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[4].itemSize = 2;
    Players[no].UV[4].numItems = 4;

    Players[no].UV[5] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[5]);
    var textureCoords = [
        0, 0.75,
        0.25, 0.75,
        0, 0.5,
        0.25, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[5].itemSize = 2;
    Players[no].UV[5].numItems = 4;

    Players[no].UV[6] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[6]);
    textureCoords = [
        0.25, 0.75,
        0.5, 0.75,
        0.25, 0.5,
        0.5, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[6].itemSize = 2;
    Players[no].UV[6].numItems = 4;

    Players[no].UV[7] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[7]);
    textureCoords = [
        0.5, 0.75,
        0.75, 0.75,
        0.5, 0.5,
        0.75, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[7].itemSize = 2;
    Players[no].UV[7].numItems = 4;

    Players[no].UV[8] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[8]);
    textureCoords = [
        0.75, 0.75,
        1, 0.75,
        0.75, 0.5,
        1, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[8].itemSize = 2;
    Players[no].UV[8].numItems = 4;

    Players[no].UV[9] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[9]);
    var textureCoords = [
        0, 0.5,
        0.25, 0.5,
        0, 0.25,
        0.25, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[9].itemSize = 2;
    Players[no].UV[9].numItems = 4;

    Players[no].UV[10] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[10]);
    textureCoords = [
        0.25, 0.5,
        0.5, 0.5,
        0.25, 0.25,
        0.5, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[10].itemSize = 2;
    Players[no].UV[10].numItems = 4;

    Players[no].UV[11] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[11]);
    textureCoords = [
        0.5, 0.5,
        0.75, 0.5,
        0.5, 0.25,
        0.75, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[11].itemSize = 2;
    Players[no].UV[11].numItems = 4;

    Players[no].UV[12] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[12]);
    textureCoords = [
        0.75, 0.5,
        1, 0.5,
        0.75, 0.25,
        1, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[12].itemSize = 2;
    Players[no].UV[12].numItems = 4;

    Players[no].UV[13] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[13]);
    var textureCoords = [
        0, 0.25,
        0.25, 0.25,
        0, 0,
        0.25, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[13].itemSize = 2;
    Players[no].UV[13].numItems = 4;

    Players[no].UV[14] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[14]);
    textureCoords = [
        0.25, 0.25,
        0.5, 0.25,
        0.25, 0,
        0.5, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[14].itemSize = 2;
    Players[no].UV[14].numItems = 4;

    Players[no].UV[15] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[15]);
    textureCoords = [
        0.5, 0.25,
        0.75, 0.25,
        0.5, 0,
        0.75, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[15].itemSize = 2;
    Players[no].UV[15].numItems = 4;

    Players[no].UV[16] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[16]);
    textureCoords = [
        0.75, 0.25,
        1, 0.25,
        0.75, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Players[no].UV[16].itemSize = 2;
    Players[no].UV[16].numItems = 4;
}

function InitPlayerShader( no ) {
    var vertexShader = getShader(gl, "shaders/player/player.vert", "vert");
    var fragmentShader = getShader(gl, "shaders/player/player.frag", "frag");

    Players[no].shader = gl.createProgram();
    gl.attachShader(Players[no].shader, fragmentShader);
    gl.attachShader(Players[no].shader, vertexShader);
    gl.linkProgram(Players[no].shader);

    if (!gl.getProgramParameter(Players[no].shader, gl.LINK_STATUS)) {
        alert("Could not initialise player shader");
    }

    gl.useProgram(Players[no].shader);

    Players[no].shader.vertexPositionAttribute = gl.getAttribLocation(Players[no].shader, "aVertexPosition");
    gl.enableVertexAttribArray(Players[no].shader.vertexPositionAttribute);

    Players[no].shader.textureCoordAttribute = gl.getAttribLocation(Players[no].shader, "aTextureCoord");
    gl.enableVertexAttribArray(Players[no].shader.textureCoordAttribute);

    Players[no].shader.samplerUniform = gl.getUniformLocation(Players[no].shader, "Sprite");

    gl.useProgram(defaultshader);
}

function InitPlayerTexture(no) {
    Players[no].texture = gl.createTexture();
    Players[no].texture.image = new Image();
    Players[no].texture.image.onload = function () {
        handleLoadedTexture(Players[no].texture)
    };
    Players[no].texture.image.src = Players[no].src;
}

function drawPlayer(no, positionx, positiony, nouv) {

    Players[no].pos.x = positionx;
    Players[no].pos.y = positiony;
    DrawUV(no, nouv);
}

var Matrix;

function DrawUV(no, nouv) {
    gl.useProgram(Players[no].shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Players[no].texture);
    gl.uniform1i(Players[no].shader.samplerUniform, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].rect);
    gl.vertexAttribPointer(Players[no].shader.vertexPositionAttribute, Players[no].rect.itemSize, gl.FLOAT, false, 0, 0);
    mat4.identity(Matrix);
    mat4.translate(Matrix, [
        (Players[no].pos.x - 1.0) * (1.0 / W_Field * 2.0) - 1.0 + 1.0 / W_Field,
        (Players[no].pos.y - 1.0) * (1.0 / H_Field * 2.0) - 1.0 + 1.0 / H_Field * 1.3,
        Players[no].pos.z]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Players[no].shader, "Matrix"), false, Matrix);
    gl.bindBuffer(gl.ARRAY_BUFFER, Players[no].UV[nouv]);
    gl.vertexAttribPointer(Players[no].shader.textureCoordAttribute, Players[no].UV[nouv].itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Players[no].rect.numItems);
    gl.useProgram(defaultshader);
    if (Players[no].pos.z == 0.2)
        drawText(no);
}

function MovePlayer( no ) {
    var posx = Players[no].pos.x, posy = Players[no].pos.y;
    var flag = true;
    if (Time % 4 == 0) {
        switch (keycode) {
            case 38:
            {
                posy++;
                Players[no].way = 13;
                Players[no].period++;
                break;
            }
            case 40:
            {
                posy--;
                Players[no].way = 1;
                Players[no].period++;
                break;
            }
            case 39:
            {
                posx++;
                Players[no].way = 9;
                Players[no].period++;
                break;
            }
            case 37:
            {
                posx--;
                Players[no].way = 5;
                Players[no].period++;
                break;
            }
            default:
            {
                break;
            }
        }
    }
    Players[no].period %= 4;
    //periodPlayer1 = Time % 4;

    if (posx <= 0 || posy <= 0 || posx > W_Field || posy > H_Field)
        flag = false;
    var check = CheckMap(posx, posy, no);
    if (check == -1)
        flag = false;
    if (flag)
    {
        Players[no].pos.x = posx;
        Players[no].pos.y = posy;
        Players[no].pos.z = check;
        addToServer("move player")
    }
    drawPlayer(no, Players[no].pos.x, Players[no].pos.y, Players[no].way + Players[no].period);
    //keycode = -1;
}