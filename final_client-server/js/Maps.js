/**
 * Created by VP1 on 08.06.2016.
 */
var Map =
{
    "massive":[],
    "src":""
};

var mapTexture;

function LoadMapTexture() {
    mapTexture = gl.createTexture();
    mapTexture.image = new Image();
    mapTexture.image.onload = function () {
        handleLoadedTexture(mapTexture)
    };
    mapTexture.image.src = Map.src;
}


function InitMap2() {
    Map.src = "img/tiles/map2.png"
    LoadMapTexture();
    for (var i = 0; i < H_Field; i++)
    {
        for (var j = 0; j < W_Field; j++)
        {
            Map.massive[i * W_Field + j] = 1;
            if (i == 0 || j == 0 || i == H_Field - 1 || j == W_Field - 1)
            {
                Map.massive[i * W_Field + j] = 2;
            }
            if (i == H_Field - 2 || i == H_Field - 3)
            {
                Map.massive[i * W_Field + j] = 2;
            }
        }
    }
    Map.massive[8 * W_Field + 8] = 2;
    Map.massive[8 * W_Field + 9] = 2;
    Map.massive[9 * W_Field + 8] = 3;
    Map.massive[9 * W_Field + 9] = 3;
    Map.massive[10 * W_Field + 8] = 3;
    Map.massive[10 * W_Field + 9] = 3;
}

function readFile(path) {
    var File = new XMLHttpRequest();
    var txt = "";
    File.open("GET", path, false);
    File.send(null);
    txt = File.responseText;
    return txt;
}

function LoadMapFromJSON(str) {
    Map = JSON.parse(str);
    LoadMapTexture();
}

function SaveMapToJSON() {
    var str = JSON.stringify(Map);
    console.log(str);
}

function CheckMap( posx, posy, no) {
    /*
    for (var i = 1; i <= numOfPlayers; i++)
        if (Players[i].active && i != no)
            if (posx == Players[i].pos.x && posy == Players[i].pos.y)
                return -1;
                */
    if (Map.massive[(posy - 1) * W_Field + posx - 1] == 2)
        return -1;
    else if (Map.massive[(posy - 1) * W_Field + posx - 1] == 1)
        return 0.2;
    else
        return 0.7;
}