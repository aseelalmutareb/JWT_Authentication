require('dotenv').config();

//import jwt
const jwt = require('jsonwebtoken');

function refreshAuth(req, res, next){
    //check for refresh token
    const { token } = req.body;
    console.log(req.body);
    //check if token does exist
    if(!token) return res.sendStatus(401); // no token

    //verify the refreshToken
    jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
        if(err) return res.sendStatus(403) // Forbidden
        req.user = user;
        next();
    });
}

module.exports = refreshAuth;