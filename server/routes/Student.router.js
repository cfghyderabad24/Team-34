const studentController = require('../controllers/studentController');
const express = require('express');
const Router = express.Router();

Router.post('/login',studentController.Login);

module.exports = Router;
