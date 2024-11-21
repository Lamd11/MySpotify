const axios = require('axios');

require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async () => {
    try {
        // Spotify requires data to be URL-encoded
        const data = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        });

        // Make a POST request to Spotify's token endpoint

        const response = await axios.post('https://accounts.spotify.com/api/token', data.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching Spotify Token:', error.response?.data || error.message);
        throw new Error('Failed to retrieve Spotify token')
    }
}

module.exports = { getSpotifyToken };