const router = require('express').Router();
const bodyParser = require('body-parser');

const companyController = require('../controllers/company');
const AuthController = require('../controllers/auth');

// company (route)
router.use(bodyParser.json());
router.post('/add-company', (req, res) => {
    return new companyController().inviteCompany(req, res);
});

router.post('/login', (req, res) => {
    return new AuthController().login(req, res);
});

router.get('/validate', (req, res) => {
    return new companyController().validateToken(req, res)
});

router.post('/resendEmail', (req, res) => {
    return new AuthController().resendEmail(req, res)
})

router.post('/update', (req, res) => {
    return new companyController().updateCompany(req, res)
})

router.get('/status', (req, res) => {
    return new companyController().findStatus(req, res)
})

router.get('/graph', (req, res) => {
    return new companyController().graph(req, res)
})

router.get('/test-auto-deploy', (req, res) => {
    return res.send("Auto deploy work");
})


module.exports = router;
