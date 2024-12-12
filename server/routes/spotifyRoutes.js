const express = require('express');
const { fetchSpotifyToken } = require('../controllers/spotifyController');

const router = express.Router();

// Fetch Spotify Token
router.get('/token', fetchSpotifyToken);

module.exports = router;
