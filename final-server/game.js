/**
 * Created by AS2 on 09.06.2016.
 */
var util = require("util"),
    io = require("socket.io");
var socket,
    players;
function init() {
    players = [];
}

init();

var setEventHandlers = function() {
    socket.sockets.on("connection", onSocketConnection);
};

function onSocketConnection(client) {
    util.log("New player has connected: "+client.id);
    client.on("disconnect", onClientDisconnect);
    client.on("new player", onNewPlayer);
    client.on("move player", onMovePlayer);
}


function onClientDisconnect() {
    util.log("Player has disconnected: "+this.id);
}

function onNewPlayer(data) {

}

function onMovePlayer(data) {

}

setEventHandlers();

socket = io.listen(8000);

socket.configure(function() {
    socket.set("transports", ["websocket"]);
    socket.set("log level", 2);
});
