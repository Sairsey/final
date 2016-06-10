/**
 * Created by VP1 on 08.06.2016.
 */
var Player2 =
{
    UV: []
};
var wayPlayer2 = 1;
var periodPlayer2 = 0;

function InitPlayer2() {
    Player2.pos = vec3.create();
    Player2.pos.x = 3;
    Player2.pos.y = 2;
    Player2.pos.z = 0.2
    InitPlayer2Buffer();
    InitPlayer2Shader();
    InitPlayer2Texture();
    Matrix = mat4.create();
}
function InitPlayer2Buffer() {
    Player2.rect = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.rect);
    var vertices = [
        -1 / W_Field, 1/ H_Field, 0,
        1/ W_Field, 1/ H_Field, 0,
        -1/ W_Field, -1/ H_Field, 0,
        1/ W_Field, -1/ H_Field, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    Player2.rect.itemSize = 3;
    Player2.rect.numItems = 4;

    Player2.UV[1] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[1]);
    var textureCoords = [
        0, 1,
        0.25, 1,
        0, 0.75,
        0.25, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[1].itemSize = 2;
    Player2.UV[1].numItems = 4;


    Player2.UV[2] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[2]);
    textureCoords = [
        0.25, 1,
        0.5, 1,
        0.25, 0.75,
        0.5, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[2].itemSize = 2;
    Player2.UV[2].numItems = 4;

    Player2.UV[3] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[3]);
    textureCoords = [
        0.5, 1,
        0.75, 1,
        0.5, 0.75,
        0.75, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[3].itemSize = 2;
    Player2.UV[3].numItems = 4;

    Player2.UV[4] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[4]);
    textureCoords = [
        0.75, 1,
        1, 1,
        0.75, 0.75,
        1, 0.75
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[4].itemSize = 2;
    Player2.UV[4].numItems = 4;

    Player2.UV[5] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[5]);
    var textureCoords = [
        0, 0.75,
        0.25, 0.75,
        0, 0.5,
        0.25, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[5].itemSize = 2;
    Player2.UV[5].numItems = 4;

    Player2.UV[6] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[6]);
    textureCoords = [
        0.25, 0.75,
        0.5, 0.75,
        0.25, 0.5,
        0.5, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[6].itemSize = 2;
    Player2.UV[6].numItems = 4;

    Player2.UV[7] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[7]);
    textureCoords = [
        0.5, 0.75,
        0.75, 0.75,
        0.5, 0.5,
        0.75, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[7].itemSize = 2;
    Player2.UV[7].numItems = 4;

    Player2.UV[8] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[8]);
    textureCoords = [
        0.75, 0.75,
        1, 0.75,
        0.75, 0.5,
        1, 0.5
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[8].itemSize = 2;
    Player2.UV[8].numItems = 4;

    Player2.UV[9] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[9]);
    var textureCoords = [
        0, 0.5,
        0.25, 0.5,
        0, 0.25,
        0.25, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[9].itemSize = 2;
    Player2.UV[9].numItems = 4;

    Player2.UV[10] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[10]);
    textureCoords = [
        0.25, 0.5,
        0.5, 0.5,
        0.25, 0.25,
        0.5, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[10].itemSize = 2;
    Player2.UV[10].numItems = 4;

    Player2.UV[11] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[11]);
    textureCoords = [
        0.5, 0.5,
        0.75, 0.5,
        0.5, 0.25,
        0.75, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[11].itemSize = 2;
    Player2.UV[11].numItems = 4;

    Player2.UV[12] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[12]);
    textureCoords = [
        0.75, 0.5,
        1, 0.5,
        0.75, 0.25,
        1, 0.25
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[12].itemSize = 2;
    Player2.UV[12].numItems = 4;

    Player2.UV[13] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[13]);
    var textureCoords = [
        0, 0.25,
        0.25, 0.25,
        0, 0,
        0.25, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[13].itemSize = 2;
    Player2.UV[13].numItems = 4;

    Player2.UV[14] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[14]);
    textureCoords = [
        0.25, 0.25,
        0.5, 0.25,
        0.25, 0,
        0.5, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[14].itemSize = 2;
    Player2.UV[14].numItems = 4;

    Player2.UV[15] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[15]);
    textureCoords = [
        0.5, 0.25,
        0.75, 0.25,
        0.5, 0,
        0.75, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[15].itemSize = 2;
    Player2.UV[15].numItems = 4;

    Player2.UV[16] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[16]);
    textureCoords = [
        0.75, 0.25,
        1, 0.25,
        0.75, 0,
        1, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    Player2.UV[16].itemSize = 2;
    Player2.UV[16].numItems = 4;
}

function InitPlayer2Shader() {
    var vertexShader = getShader(gl, "shaders/player/player.vert", "vert");
    var fragmentShader = getShader(gl, "shaders/player/player.frag", "frag");

    Player2.shader = gl.createProgram();
    gl.attachShader(Player2.shader, fragmentShader);
    gl.attachShader(Player2.shader, vertexShader);
    gl.linkProgram(Player2.shader);

    if (!gl.getProgramParameter(Player2.shader, gl.LINK_STATUS)) {
        alert("Could not initialise player shader");
    }

    gl.useProgram(Player2.shader);

    Player2.shader.vertexPositionAttribute = gl.getAttribLocation(Player2.shader, "aVertexPosition");
    gl.enableVertexAttribArray(Player2.shader.vertexPositionAttribute);

    Player2.shader.textureCoordAttribute = gl.getAttribLocation(Player2.shader, "aTextureCoord");
    gl.enableVertexAttribArray(Player2.shader.textureCoordAttribute);

    Player2.shader.samplerUniform = gl.getUniformLocation(Player2.shader, "Sprite");

    gl.useProgram(defaultshader);
}

function InitPlayer2Texture() {
    Player2.texture = gl.createTexture();
    Player2.texture.image = new Image();
    Player2.texture.image.onload = function () {
        handleLoadedTexture(Player2.texture)
    };
    Player2.texture.image.src = "img/sprites/player1.png";
}

function drawPlayer2(positionx, positiony, nouv) {

    Player2.pos.x = positionx;
    Player2.pos.y = positiony;
    Draw2UV(nouv);
}

var Matrix;

function Draw2UV(nouv) {
    gl.useProgram(Player2.shader);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Player2.texture);
    gl.uniform1i(Player2.shader.samplerUniform, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.rect);
    gl.vertexAttribPointer(Player2.shader.vertexPositionAttribute, Player2.rect.itemSize, gl.FLOAT, false, 0, 0);
    mat4.identity(Matrix);
    mat4.translate(Matrix, [(Player2.pos.x - 1) * (1.0 / W_Field * 2) - 1.0 + 1 / W_Field, (Player2.pos.y - 1) * (1.0 / H_Field * 2) - 1 + 1 / H_Field * 1.3 , Player2.pos.z]);
    gl.uniformMatrix4fv(gl.getUniformLocation(Player2.shader, "Matrix"), false, Matrix);
    gl.bindBuffer(gl.ARRAY_BUFFER, Player2.UV[nouv]);
    gl.vertexAttribPointer(Player2.shader.textureCoordAttribute, Player2.UV[nouv].itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, Player2.rect.numItems);
    gl.useProgram(defaultshader);
}

function MovePlayer2() {
    var posx = Player2.pos.x, posy = Player2.pos.y;
    var flag = true;
    if (Time % 4 == 0) {
        switch (keycode) {
            case 87:
            {
                posy++;
                wayPlayer2 = 13;
                periodPlayer2++;
                break;
            }
            case 83:
            {
                posy--;
                wayPlayer2 = 1;
                periodPlayer2++;
                break;
            }
            case 68:
            {
                posx++;
                wayPlayer2 = 9;
                periodPlayer2++;
                break;
            }
            case 65:
            {
                posx--;
                wayPlayer2 = 5;
                periodPlayer2++;
                break;
            }
            default:
            {
                break;
            }
        }
    }
    periodPlayer2 %= 4;
    //periodPlayer2 = Time % 4;

    if (posx <= 0 || posy <= 0 || posx > W_Field || posy > H_Field)
        flag = false;
    var check = CheckMap(posx, posy);
    if (check == -1)
        flag = false;
    if (flag)
    {
        Player2.pos.x = posx;
        Player2.pos.y = posy;
        Player2.pos.z = check;
    }
    drawPlayer2(Player2.pos.x, Player2.pos.y, wayPlayer2 + periodPlayer2);
    //keycode = -1;
}