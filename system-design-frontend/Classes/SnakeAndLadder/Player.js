class Player {
    constructor(name) {
        this.name = name;
        this.currentPosition = 0;
    }
    getname() {
        return this.name;
    }
    getPosition() {
        return this.currentPosition;
    }
    setPosition(pos) {
        this.currentPosition = pos;
    }
}

export default Player;