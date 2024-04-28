import Board from "./Board";
import Player from "./Player";
import Dice from "./Dice";

let Difficulty = {
    EASY: {
        snakes: 6,
        ladders: 10
    },
    MEDIUM: {
        snakes: 8,
        ladders: 10
    },
    HIGH: {
        snakes: 12,
        ladders: 10
    }
}

class Game {
    constructor(noOfDices, players, sizeOfBoard, difficulty = Difficulty.EASY) {
        this.board = new Board(sizeOfBoard);
        this.noOfSnakes = Difficulty[difficulty].snakes;
        this.noOfLadders = Difficulty[difficulty].ladders;
        this.players = []; // act as queue;
        this.snakes = {};  // Map to get the element in O(1)
        this.ladders = {}; // Map to get the element in O(1)
        this.noOfDices = noOfDices;
        this.dice = new Dice();
        this.activePlayer = null;
        this.winner = null;
        this.setPlayers(players);
        this.initGame();
    }

    initGame() {
        this.generateLadders();
        this.generateSnakes();
    }

    setPlayers(players) {
        for (let player of players) {
            this.players.push(new Player(player));
        }
    }

    generateSnakes() {
        // if the player is at the starting position of snake , update the players position to end position of snake
        // map the start with the end position of the snake
        let count = this.noOfSnakes;
        while (count) {
            let start = Math.floor(Math.random() * this.board.size);
            let end = Math.floor(Math.random() * this.board.size);
            // do not consider this pair for the following
            if (start >= end || this.snakes[start] || this.ladders[start] || this.ladders[end]) continue;
            if (!this.snakes[start]) {
                this.snakes[start] = end;
                count--;
            }
        }
    }

    generateLadders() {
        let count = this.noOfLadders;
        while (count) {
            let start = Math.floor(Math.random() * this.board.size);
            let end = Math.floor(Math.random() * this.board.size);
            if (start >= end || this.ladders[start] || this.snakes[start] || this.snakes[end]) continue;
            if (!this.ladders[start]) {
                this.ladders[start] = end;
                count--;
            }
        }
    }

    startGame(){
        while(this.players.length > 1){
            let curPlayer = this.players.shift(); // act as queue
            let diceNum = this.dice.rollDice();
            let newPos = curPlayer.getPosition() + diceNum;
            if(newPos === this.board.size){
                curPlayer.setPosition(newPos);
                console.log(`${curPlayer} has won the game`);
                continue;
            }
            if(newPos > this.board.size){
                this.players.push(curPlayer);
                continue;
            }
            if(this.ladders[newPos]){
                curPlayer.setPosition(this.ladders[newPos]);
                console.log(`${curPlayer} has got the ladder from: ${newPos}`)
                this.players.push(curPlayer);
            }
            if(this.snakes[newPos]){
                curPlayer.setPosition(this.snakes[newPos]);
                console.log(`${curPlayer} has got bitten from snake at: ${newPos}`)
                this.players.push(curPlayer);
            }

        }
    }
}

export default Game;