const onboardingController = require('../controller/onboardingController');
const bodyParser = require('body-parser');
const mongoose = require('../db');
// const express = require('express');

const route = require('express').Router();

route.use(bodyParser.json());
route.use(mongoose.json());
route.get('/:companyId', (req, res) => {
    return new onboardingController().updateCompanyRecordById(req, res);
});

// route.post('/login', (req, res) => {
//     return new AuthController().login(req, res);
// })

// route.post('/update', (req, res) => {
//     return new companyController().updateCompany(req, res)
// })

module.exports = route;


// const onboardingRouter = require('express').Router();
// const MainController = require('../controllers/onboardingController');

// onBoardingRouter.get('/:companyId', (req, res) => {
//     return new MainController().updateCompanyRecordById(req, res)
// });

// module.exports = onboardingRouter;
