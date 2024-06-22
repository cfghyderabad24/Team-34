const ngo = require('../controllers/ngoController');
const express = require('express');
const Router = express.Router();

Router.post('/uploadStudentData',ngo.UploadStudentData);

module.exports = Router;