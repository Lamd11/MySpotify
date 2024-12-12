const express = require('express');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlistRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/playlist', playlistRoutes);
app.use('/spotify', spotifyRoutes);

// Root
app.get('/', (req, res) => {
    res.send('Welcome to the Spotify Playlist API!');
});

module.exports = app;
