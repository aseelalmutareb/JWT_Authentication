// loading environment variables
require('dotenv').config();

// import express package
const express = require('express');

// import jsonwebtoken for authorization
const jwt = require('jsonwebtoken');

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

// initialize posts dataset
const posts = [
    {
        username: 'John',
        title: 'Post 1'
    },
    {
        username: 'Gina',
        title: 'Post 2'
    }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

// listen to port number: 3000
const PORT = process.env.SERVER_PORT;
app.listen(
    PORT, 
    () => console.log(`Application is connected and listening to port ${PORT}`)
    );

// create a login route
app.post('/login', (req,res) => {
    //Authentication: e.g. 'passport js'
    //Authorization: JWT
    
    //create a token to access api's you are authorized to:
    const username = req.body.username;
    const user = {
        name: username
    };
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
    res.json({
        accessToken
    });
}); 
