import Game from "./Game";

function playGame(){
    let players = [];
    players.push("abc");
    players.push("def");

    let game = new Game(1, players, 100, "EASY");
    game.startGame()
}

playGame();