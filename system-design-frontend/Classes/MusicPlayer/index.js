import MusicPlayer from "./MusicPlayer";
import Song from "./Song";

let songs = [
    new Song(1, "Levitating", "Dua Lipa", "Hollywood"),
    new Song(2, "Love you Zindagi", "Alia Bhatt", "Bollywood"),
    new Song(3, "Dil", "Villain", "Bollywood"),
    new Song(4, "I Like me better", "Selena", "Hollywood"),
    new Song(5, "LoveStory", "Taylor", "Hollywood")
];

let musicPlayer = new MusicPlayer();

songs.forEach((song) => musicPlayer.addSong(song));
musicPlayer.printList();

[1, 2, 3, 4, 5, 6, 7].forEach((_) => musicPlayer.playRandomSong());
musicPlayer.playSong(2, false);
