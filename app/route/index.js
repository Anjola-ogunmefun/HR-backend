const router = require('express').Router();
const MainController = require('../controllers/index');

router.get('/test', (req, res) => {
    return new MainController().testFunction(req, res)
});

module.exports = router;