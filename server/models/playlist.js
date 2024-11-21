class Playlist {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }
}

module.exports = Playlist;
