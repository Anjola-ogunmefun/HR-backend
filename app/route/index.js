const router = require('express').Router();
const bodyParser = require('body-parser');

const companyController = require('../controllers/company');
const AuthController = require('../controllers/auth');

// company
router.use(bodyParser.json());
router.post('/add-company', (req, res) => {
    return new companyController().inviteCompany(req, res);
});
route.get('/:companyEmail', (req, res) => {
    return new onboardingController().updateCompanyRecordByEmail(req, res);
});






module.exports = route;








router.post('/login', (req, res) => {
    return new AuthController().login(req, res);
})

<<<<<<< HEAD
// route.post('/update', (req, res) => {
//     return new companyController().updateCompany(req, res)
// })




// const onboardingRouter = require('express').Router();
// const MainController = require('../controllers/onboardingController');

// onBoardingRouter.get('/:companyId', (req, res) => {
//     return new MainController().updateCompanyRecordById(req, res)
// });
=======
router.post('/update', (req, res) => {
    return new companyController().updateCompany(req, res);
});
>>>>>>> 50f12bfc16b1b91a4008def44e70dcddf9e3cb2d

module.exports = router;
