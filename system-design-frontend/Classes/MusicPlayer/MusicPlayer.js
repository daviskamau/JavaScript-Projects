// https://prakhargurawa.medium.com/design-a-music-player-with-shuffle-functionality-f9d6f53ff028

class MusicPlayer {
    constructor() {
        this.totalSongCount = 0;
        this.musicList = [];
        this.musicQ = [];
        this.random = 0;
        this.addSong = this.addSong.bind(this);
        this.playRandomSong = this.playRandomSong.bind(this);
        this.playSong = this.playSong.bind(this);
        this.closeMusicPlayer = this.closeMusicPlayer.bind(this);
        this.printList = this.printList.bind(this);
    }
    addSong(song) {
        console.log(song.songName);
        this.musicList.splice(this.totalSongCount, 0, song);
        this.totalSongCount++;
    }
    playSong(id, addToQ) {
        for (let i = 0; i < this.totalSongCount; i++) {
            let song = this.musicList[i];
            console.log("Playing song " + song.songName);
            if (song.id === id) {
                if (addToQ) this.musicQ.push(song);
                this.musicList.splice(i, 1);
                this.musicList.push(song);
                this.totalSongCount--;
                if (this.totalSongCount < 0) {
                    this.totalSongCount = this.musicList.length;
                }
            }
        }
        for (let i = this.totalSongCount; i < this.musicList.length; i++) {
            let song = this.musicList[i];
            if (song.id === id) {
                if (addToQ) this.musicQ.push(song);
            }
        }
    }
    playRandomSong() {
        this.random = Math.floor(Math.random() * this.totalSongCount);
        let song = this.musicList[this.random];
        console.log("Playing song " + song.songName + " at index " + this.random);
        this.musicQ.push(song);
        this.musicList.splice(this.random, 1);
        this.musicList.push(song);
        this.totalSongCount--;
        if (this.totalSongCount < 0) {
            this.totalSongCount = this.musicList.length;
        }
        this.printList();
    }
    closeMusicPlayer() {
        console.log("Closing Music Player");
        this.musicQ = [];
        this.totalSongCount = this.musicList.length;
    }
    printList() {
        console.log("Total Songs Count", this.totalSongCount);
        console.log(
            "MusicList :",
            this.musicList.map((ele) => `${ele.id}-${ele.songName}`)
        );
        console.log(
            "Music Queue: ",
            this.musicQ.map((ele) => `${ele.id}-${ele.songName}`)
        );
    }
}

export default MusicPlayer;
