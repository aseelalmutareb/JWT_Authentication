const express = require('express');

//importing authorisationToken middleware
const authorisationToken = require('../../middlewares/authorisationToken');

//importing controllers: commonJS
const { getPosts } = require('../../controllers/controllers.js');


const router = express.Router();

//create a route to get all posts
router.get('/posts', authorisationToken, getPosts);

module.exports = router;