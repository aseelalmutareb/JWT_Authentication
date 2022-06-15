// loading environment variables
require("dotenv").config();

// import express
const express = require("express");

//importing the router
const router = require('./routes/api/router');

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

//use the router
app.use(router);

// Listen to port number: 3001
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});
