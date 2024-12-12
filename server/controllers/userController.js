const { getSpotifyToken, getUserProfile } = require('../models/userModel');


// Controller to fetch and send the Spotify token 
const fetchSpotifyToken = async (req, res) => {
    try{
        const tokenData = await getSpotifyToken();
        res.json(tokenData);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const fetchUserProfile = async (req, res) => {
    try{
        const userProfileData = await getUserProfile();
        res.json(userProfileData);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = { fetchSpotifyToken, fetchUserProfile };