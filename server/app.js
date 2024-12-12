const express = require('express');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlistRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/playlist', playlistRoutes);
app.use('/user', userRoutes);

// Root
app.get('/', (req, res) => {
    res.send('Welcome to the Spotify Playlist API!');
});

module.exports = app;
