const express = require('express');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlistRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/playlist', playlistRoutes);
app.use('/spotify', spotifyRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Spotify Playlist API!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
