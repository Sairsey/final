var app = require("express")();
var bodyParser = require("body-parser");
var http = require('http').Server(app);
var io = require("socket.io")(http);
var players,
    numOfPlayers = 0;
function init() {
    players = [];
    players[0] = new Object();
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

init();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/js/libs/:id', function(req, res){
    res.sendFile(__dirname + '/js/libs/' + req.params.id);
});
app.get('/img/sprites/:id', function (req, res, next) {
    res.sendFile(__dirname + "/img/sprites/" +req.params.id);
});
app.get('/img/tiles/:id', function (req, res, next) {
    res.sendFile(__dirname + "/img/tiles/" +req.params.id);
});
app.get('/js/:id', function(req, res){
    res.sendFile(__dirname + '/js/' + req.params.id);
});
app.get('/Maps/:id', function(req, res){
    res.sendFile(__dirname + '/Maps/' + req.params.id);
});

app.get('/shaders/default/:id', function(req, res){
    res.sendFile(__dirname + '/shaders/default/' + req.params.id);
});

app.get('/shaders/player/:id', function(req, res){
    res.sendFile(__dirname + '/shaders/player/' + req.params.id);
});
app.get('/css/:id', function(req, res){
    res.sendFile(__dirname + '/css/' + req.params.id);
});
app.get('/shaders/text/:id', function(req, res){
    res.sendFile(__dirname + '/shaders/text/' + req.params.id);
});

app.get('/game.html', function(req, res){
    res.sendFile(__dirname + '/game.html');
});

app.post('/login', function(req, res){
    var nick = req.body.nick;
    for (var i = 1 ; i <= numOfPlayers; i++)
        if (players[i].nick == nick)
        {
            res.send("No");
            return;
        }
    numOfPlayers++;
    players[numOfPlayers] = new Object();
    players[numOfPlayers].nick = nick;
    players[numOfPlayers].src = req.body.texture;
    console.log("nick = "+players[numOfPlayers].nick+", Src is "+ players[numOfPlayers].src);
    res.send("Yes");
});



setEventHandlers();

http.listen(6890, function(){
    console.log('listening on *:6890');
});


function setEventHandlers() {
    io.on("connection", check);
}

function check(client) {
    console.log("New player has connected: " + client.id);
    client.emit("add_player", {data: numOfPlayers, players: players});
    client.on("disconnect", onClientDisconnect);
    client.on("new player", function (data) {
            players[data.num] = data;
            client.broadcast.emit("add new player", data);
        });
    client.on("move player", function (data) {
        players[data.num].posx = data.posx;
        players[data.num].posy = data.posy;
        players[data.num].posz = data.posz;
        players[data.num].way = data.way;
        players[data.num].period = data.period;
        client.broadcast.emit('update positions', data);
    });

}


function onClientDisconnect() {
    numOfPlayers--;
    console.log("Player has disconnected: " + this.id);
}

