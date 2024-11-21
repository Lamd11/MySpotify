const Playlist = require('../models/playlist')

const myPlayList = new Playlist('My First Playlist', 'My favourite songs');

// Controller Actions
const getPlaylist = (req, res) => {
    res.json({
        name: myPlayList.name,
        description: myPlayList.description,
        songs: myPlayList.songs
    });
};

const addSongToPlaylist = (req, res) => {
    const { song } = req.body;
    if (!song) {
        return res.status(400).json({error: 'Song is required'});
    }
    myPlayList.addSong(song);
    res.json({message: 'Song Added!', playList: myPlayList});
};

module.exports = {getPlaylist, addSongToPlaylist}