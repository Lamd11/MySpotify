const express = require('express');
const {getPlaylist, addSongToPlaylist} = require('../controllers/playlistController');

const router = express.Router();

router.get('/', getPlaylist);
router.post('/add', addSongToPlaylist);

module.exports = router;