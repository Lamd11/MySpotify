require('dotenv').config();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;


const express = require('express');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/playlist', playlistRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Spotify Playlist API!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
