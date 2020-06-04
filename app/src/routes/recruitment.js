const recruitmentRoute = require('express').Router();
const {createEmployeeRecord} = require('../controllers/recruitmentController');


recruitmentRoute.get('/', createEmployeeRecord);

module.exports = recruitmentRoute;