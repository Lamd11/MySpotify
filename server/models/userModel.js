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
        throw new Error('Failed to retrieve Spotify token');
    }
}

const getUserProfile = async () => {
    try{
        const token = await getSpotifyToken();
        const accessToken = token.access_token;

        const res = await axios.post('https://api.spotify.com/v1/me', data.toString(), {
            headers: {
                'Authorization' : `Bearer${accessToken}`,
            }
        });
        res.json(res.data);
    } catch (error) {
        console.error('Error fetching User Profile:', error.response?.data || error.message);
        throw new Error('Failed to retrieve User Profile');
    }
};

module.exports = { getSpotifyToken };