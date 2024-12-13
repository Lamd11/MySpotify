const axios = require('axios');
const crypto = require('crypto')
const queryString = require('querystring')

require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

let stateKey = null;

const getUserLogin = async (req, res) => {

    const generateRandomString = (length) => {
        return crypto.randomBytes(60).toString('hex').slice(0, length);
    }

    stateKey = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
        queryString.stringify({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: stateKey
        }));
}

const getSpotifyToken = async (req, res) => {

    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state !== stateKey) {
        res.redirect('/#' +
            queryString.stringify({
                error: 'state_mismatch'
            }));
    }

    try {
        // Spotify requires data to be URL-encoded
        const data = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
        });

        const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        // Make a POST request to Spotify's token endpoint

        const response = await axios.post('https://accounts.spotify.com/api/token', data.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${authHeader}`
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching Spotify Token:', error.response?.data || error.message);
        throw new Error('Failed to retrieve Spotify token');
    }

}

const getUserProfile = async () => {
    try {
        const token = await getSpotifyToken();
        const accessToken = token.access_token;

        const res = await axios.post('https://api.spotify.com/v1/me', data.toString(), {
            headers: {
                'Authorization': `Bearer${accessToken}`,
            }
        });
        res.json(res.data);
    } catch (error) {
        console.error('Error fetching User Profile:', error.response?.data || error.message);
        throw new Error('Failed to retrieve User Profile');
    }
};

module.exports = { getUserLogin, getSpotifyToken, getUserProfile };