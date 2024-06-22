const volcont = require('../controllers/volunteerController');
const express = require('express');
const Router = express.Router();

Router.get('/ViewAll',volcont.ViewNgo);
Router.get('/ViewStudents',volcont.ViewStudents);

module.exports = Router;
