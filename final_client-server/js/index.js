var image_src;
var nickname;

function login() {
    nickname = document.getElementById("nick").value;
    image_src = document.getElementById("texture").value;
    location.href = '/game.html';
}

