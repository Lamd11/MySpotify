const { getSpotifyToken, getUserProfile, getUserLogin } = require('../models/userModel');

const fetchUserLogin = async (req,res) => {
    try{
        getUserLogin(req, res);
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

// Controller to fetch and send the Spotify token 
const fetchSpotifyToken = async (req, res) => {
    try{
        const data = await getSpotifyToken(req, res);
        res.json(data)
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

module.exports = { fetchUserLogin, fetchSpotifyToken, fetchUserProfile};