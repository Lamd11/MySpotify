const express = require('express');
const { fetchSpotifyToken, fetchUserProfile } = require('../controllers/userController');

const router = express.Router();

// Fetch Spotify Token
router.get('/token', fetchSpotifyToken);
router.get('/profile', fetchUserProfile);

module.exports = router;