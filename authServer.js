// loading environment variables
require("dotenv").config();

const { login } = require('./controllers/controllers.js');

// import express
const express = require("express");

//importing the router
const router = require('./routes/api/authRouter.js');

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

app.use(router);

// Create a login route
app.post("/login", login);

// Listen to port number: 4000
const PORT = process.env.AUTH_SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});
