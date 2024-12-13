const express = require('express');
const { fetchSpotifyToken, fetchUserProfile, fetchUserLogin, fetchUserTop} = require('../controllers/userController');

const router = express.Router();

// Fetch Spotify Token
router.get('/token', fetchSpotifyToken);
router.get('/profile', fetchUserProfile);
router.get('/profile/top', fetchUserTop);
router.get('/login', fetchUserLogin);

module.exports = router;