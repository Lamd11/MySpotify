const express = require('express');
const { fetchSpotifyToken } = require('../controllers/spotifyController');

const router = express.Router();

// Route to fetch the Spotify token
router.get('/token', fetchSpotifyToken);

module.exports = router;
