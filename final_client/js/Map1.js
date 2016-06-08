/**
 * Created by VP1 on 08.06.2016.
 */
var Map =
{
    massive: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
};

function InitMap1() {
    for (var i = 0; i < H_Field; i++)
    {
        for (var j = 0; j < W_Field; j++)
        {
            Map.massive[i][j] = 1;
            if (i == 0 || j == 0 || i == H_Field - 1 || j == W_Field - 1)
            {
                Map.massive[i][j] = 2;
            }
            if (i == H_Field - 2 || i == H_Field - 3)
            {
                Map.massive[i][j] = 2;
            }
        }
    }
    Map.massive[8][8] = 2;
    Map.massive[8][9] = 2;
    Map.massive[9][8] = 3;
    Map.massive[9][9] = 3;
    Map.massive[10][8] = 3;
    Map.massive[10][9] = 3;

}

function CheckMap( posx, posy) {
    if (Map.massive[posy - 1][posx - 1] == 2)
        return -1;
    else if (Map.massive[posy - 1][posx - 1] == 1)
        return 0.2;
    else
        return 0.7;
}