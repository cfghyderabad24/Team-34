const volcont = require('../controllers/volunteerController');
const express = require('express');
const Router = express.Router();

Router.get('/ViewAll',volcont.ViewNgo);

module.exports = Router;
