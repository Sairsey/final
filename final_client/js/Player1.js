/**
 * Created by VP1 on 08.06.2016.
 */
var Player1 =
{
    UV: []
};
var way = 1;
var period = 0;

function InitPlayer1() {
    Player1.pos = vec3.create();
    Player1.pos.x = 2;
    Player1.pos.y = 2;
    Player1.pos.z = 0.2
    InitPlayer1Buffer();
    InitPlayer1Shader();
    InitPlayer1Texture();
    Matrix = mat4.create();
}
function InitPlayer1Buffer() {
    Player1.rect = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    var vertices = [
        -1 / W_Field, 1/ H_Field, 0,
        1/ W_Field, 1/ H_Field, 0,
        -1/ W_Field, -1/ H_Field, 0,
        1/ W_Field, -1/ H_Field, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Player1.rect.itemSize = 3;
    Player1.rect.numItems = 4;

    Player1.UV[1] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[1]);
    var textureCoords = [
        0, 1,
        0.25, 1,
        0, 0.75,
        0.25, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[1].itemSize = 2;
    Player1.UV[1].numItems = 4;


    Player1.UV[2] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[2]);
    textureCoords = [
        0.25, 1,
        0.5, 1,
        0.25, 0.75,
        0.5, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[2].itemSize = 2;
    Player1.UV[2].numItems = 4;

    Player1.UV[3] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[3]);
    textureCoords = [
        0.5, 1,
        0.75, 1,
        0.5, 0.75,
        0.75, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[3].itemSize = 2;
    Player1.UV[3].numItems = 4;

    Player1.UV[4] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[4]);
    textureCoords = [
        0.75, 1,
        1, 1,
        0.75, 0.75,
        1, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[4].itemSize = 2;
    Player1.UV[4].numItems = 4;

    Player1.UV[5] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[5]);
    var textureCoords = [
        0, 0.75,
        0.25, 0.75,
        0, 0.5,
        0.25, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[5].itemSize = 2;
    Player1.UV[5].numItems = 4;

    Player1.UV[6] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[6]);
    textureCoords = [
        0.25, 0.75,
        0.5, 0.75,
        0.25, 0.5,
        0.5, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[6].itemSize = 2;
    Player1.UV[6].numItems = 4;

    Player1.UV[7] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[7]);
    textureCoords = [
        0.5, 0.75,
        0.75, 0.75,
        0.5, 0.5,
        0.75, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[7].itemSize = 2;
    Player1.UV[7].numItems = 4;

    Player1.UV[8] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[8]);
    textureCoords = [
        0.75, 0.75,
        1, 0.75,
        0.75, 0.5,
        1, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[8].itemSize = 2;
    Player1.UV[8].numItems = 4;

    Player1.UV[9] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[9]);
    var textureCoords = [
        0, 0.5,
        0.25, 0.5,
        0, 0.25,
        0.25, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[9].itemSize = 2;
    Player1.UV[9].numItems = 4;

    Player1.UV[10] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[10]);
    textureCoords = [
        0.25, 0.5,
        0.5, 0.5,
        0.25, 0.25,
        0.5, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[10].itemSize = 2;
    Player1.UV[10].numItems = 4;

    Player1.UV[11] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[11]);
    textureCoords = [
        0.5, 0.5,
        0.75, 0.5,
        0.5, 0.25,
        0.75, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[11].itemSize = 2;
    Player1.UV[11].numItems = 4;

    Player1.UV[12] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[12]);
    textureCoords = [
        0.75, 0.5,
        1, 0.5,
        0.75, 0.25,
        1, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[12].itemSize = 2;
    Player1.UV[12].numItems = 4;

    Player1.UV[13] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[13]);
    var textureCoords = [
        0, 0.25,
        0.25, 0.25,
        0, 0,
        0.25, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[13].itemSize = 2;
    Player1.UV[13].numItems = 4;

    Player1.UV[14] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[14]);
    textureCoords = [
        0.25, 0.25,
        0.5, 0.25,
        0.25, 0,
        0.5, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[14].itemSize = 2;
    Player1.UV[14].numItems = 4;

    Player1.UV[15] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[15]);
    textureCoords = [
        0.5, 0.25,
        0.75, 0.25,
        0.5, 0,
        0.75, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[15].itemSize = 2;
    Player1.UV[15].numItems = 4;

    Player1.UV[16] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[16]);
    textureCoords = [
        0.75, 0.25,
        1, 0.25,
        0.75, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player1.UV[16].itemSize = 2;
    Player1.UV[16].numItems = 4;
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
    Draw1UV(nouv);
}

var Matrix;

function Draw1UV(nouv) {
    gl.useProgram(Player1.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player1.texture);
    gl.uniform1i(Player1.shader.samplerUniform, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.rect);
    gl.vertexAttribPointer(Player1.shader.vertexPositionAttribute, Player1.rect.itemSize, gl.FLOAT, false, 0, 0);
    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player1.pos.x - 1) * (1.0 / W_Field * 2) - 1.0 + 1 / W_Field, (Player1.pos.y - 1) * (1.0 / H_Field * 2) - 1 + 1 / H_Field * 1.3 , Player1.pos.z]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player1.shader, "Matrix"), false, Matrix);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player1.UV[nouv]);
    gl.vertexAttribPointer(Player1.shader.textureCoordAttribute, Player1.UV[nouv].itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player1.rect.numItems);
    gl.useProgram(defaultshader);
}

function MovePlayer1() {
    var posx = Player1.pos.x, posy = Player1.pos.y;
    var flag = true;
    if (Time % 4 == 0) {
        switch (keycode) {
            case 38:
            {
                posy++;
                way = 13;
                period++;
                break;
            }
            case 40:
            {
                posy--;
                way = 1;
                period++;
                break;
            }
            case 39:
            {
                posx++;
                way = 9;
                period++;
                break;
            }
            case 37:
            {
                posx--;
                way = 5;
                period++;
                break;
            }
            default:
            {
                break;
            }
        }
    }
    period %= 4;
    //period = Time % 4;

    if (posx <= 0 || posy <= 0 || posx > W_Field || posy > H_Field)
        flag = false;
    var check = CheckMap(posx, posy);
    if (check == -1)
        flag = false;
    if (flag)
    {
        Player1.pos.x = posx;
        Player1.pos.y = posy;
        Player1.pos.z = check;
    }
    drawPlayer1(Player1.pos.x, Player1.pos.y, way + period);
    //keycode = -1;
}