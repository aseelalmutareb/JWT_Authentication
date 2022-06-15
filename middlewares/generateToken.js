//import jwt
const jwt = require('jsonwebtoken');


module.exports = function generateToken(user, secret, expTime){
    //adding expiration time to the token
    return jwt
           .sign(
               user,
               secret,
               {
                   expiresIn: expTime
               }
           );

}