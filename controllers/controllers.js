//loading env to process
require('dotenv').config();

// initialise our posts dataset
const posts = require('../datasets/posts_dataset.js');

//import generate Token
const generateToken = require('../middlewares/generateToken');


/**
 * @method: GET
 * @description: get posts of the logged user
 * @access: Private
 */
function getPosts(req, res){
    res.json(posts.filter(post => post.username === req.user.name));
}

/**
 * @method: POST
 * @description: login
 * @access: Public
 */
function login(req, res){
    // 1- Authentication : e.g. "passport js"
    // 2- Authorisation : JWT, 
    // Create a token to access api's you are authorised to.
    const username = req.body.username;
    const user = {
      name: username,
    };
    const accessToken = generateToken(user, process.env.REFRESH_SECRET, '30s');
    const refreshToken = generateToken(user, process.env.REFRESH_SECRET, '3600s');
    res.json({
      accessToken,
      refreshToken
    });
  }

function tokenController(req, res) {

  //create a token to access apis you are authorised to
  const username = req.user.name;
  const user = {
    name: username
  };

  const accessToken = generateToken(user, process.env.ACCESS_SECRET, '30s');
  res.json({
    accessToken
  });
}

  module.exports = { getPosts, login, tokenController }

  