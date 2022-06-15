const express = require('express');

//importing controllers: commonJS
const { login, tokenController } = require('../../controllers/controllers.js');
const refreshAuth = require('../../middlewares/refreshAuthorisation');

const router = express.Router();

//create a login route
router.post('/login', login);
router.post('/token', refreshAuth, tokenController)

module.exports = router;