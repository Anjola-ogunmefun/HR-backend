const router = require('express').Router();
const bodyParser = require('body-parser');

const companyController = require('../controllers/company');
const AuthController = require('../controllers/auth');

// company (route)
router.use(bodyParser.json());
router.post('/login', (req, res) => {
    return new AuthController().login(req, res);
});

router.post('/add-company', (req, res) => {
    return new companyController().inviteCompany(req, res);
});

router.get('/:companyEmail', (req, res) => {
    return new onboardingController().updateCompanyRecordByEmail(req, res);
});

router.get('/:companyId', (req, res) => {
    return new onboardingController().updateCompanyRecordById(req, res);
});






module.exports = router;









// route.post('/update', (req, res) => {
//     return new companyController().updateCompany(req, res)
// })




// const onboardingRouter = require('express').Router();
// const MainController = require('../controllers/onboardingController');

// onBoardingRouter.get('/:companyId', (req, res) => {
//     return new MainController().updateCompanyRecordById(req, res)
// });


