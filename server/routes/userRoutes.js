const express = require('express');
const { fetchSpotifyToken, fetchUserProfile, fetchUserLogin} = require('../controllers/userController');

const router = express.Router();

// Fetch Spotify Token
router.get('/callback', fetchSpotifyToken);
router.get('/profile', fetchUserProfile);
router.get('/login', fetchUserLogin);

module.exports = router;