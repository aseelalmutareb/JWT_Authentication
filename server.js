// loading environment variables
require("dotenv").config();
// import express
const express = require("express");

//import jsonwebtoken for authorisation
const jwt = require("jsonwebtoken");

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());
// initialise our posts dataset
const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Gina",
    title: "Post 2",
  },
];



//Create simple route to get all our posts
/**
 * @method: GET
 * @description: get posts of the logged user
 * @access: Private
 */
app.get("/posts", authoriseToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
  //   res.write(posts)
  //   res.end();
  //.write + .end = .send
  // additional functionalities inside express, use .json. .json converts all types that are sent, making it simpler to use.
});

// Create a login route
/**
 * @method: POST
 * @description: login
 * @access: Public
 */
app.post("/login", (req, res) => {
  // 1- Authentication : e.g. "passport js"
  // 2- Authorisation : JWT, 
  // Create a token to access api's you are authorised to.
  const username = req.body.username;
  const user = {
    name: username,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
  res.json({
    accessToken,
  });
});

//
function authoriseToken(req, res, next){
    // access the request headers to look for the token
    const authHeader = req.headers["authorization"]; 
    // req.headers["authorization"] : Bearer "jhbfvejsfbweiube"
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401); // no token

    // as we are here, means we have a token, we need to revify it:
    jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    })

}

// Listen to port number: 3001
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});
