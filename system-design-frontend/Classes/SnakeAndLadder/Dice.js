class Dice {
    constructor() {
        this.maxNumber = 6
    }
    rollDice() {
        return Math.floor(Math.random() * this.maxNumber);
    }
}

export default Dice;