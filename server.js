// loading environment variables
require('dotenv').config();

// import express package
const express = require('express');

// instantiate express application
const app = express();

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
