// loading environment variables
require("dotenv").config();

const { getPosts, login } = require('./controllers/controllers.js');

// import express
const express = require("express");

//importing the router
const router = require('./routes/api/router');

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

//Create simple route to get all our posts
app.get("/posts", getPosts);

// Create a login route
app.post("/login", login);

// Listen to port number: 3001
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});
