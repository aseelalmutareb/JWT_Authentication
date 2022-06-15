const express = require('express');

//importing authorisationToken middleware
const authorisationToken = require('../../middlewares/authorisationToken');

//importing controllers: commonJS
const { getPosts, login, tokenController } = require('../../controllers/controllers.js');
const refreshAuth = require('../../middlewares/refreshAuthorisation');

const router = express.Router();

//create a route to get all posts
router.get('/posts', authorisationToken, getPosts);

//create a login route
router.post('/login', login);
router.post('/token', refreshAuth, tokenController)

module.exports = router;