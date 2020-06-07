const router = require('express').Router();
const bodyParser = require('body-parser');

const companyController = require('../controllers/company');
const AuthController = require('../controllers/auth');

// company
router.use(bodyParser.json());
router.post('/add-company', (req, res) => {
    return new companyController().inviteCompany(req, res);
});

router.post('/login', (req, res) => {
    return new AuthController().login(req, res);
})


module.exports = router;