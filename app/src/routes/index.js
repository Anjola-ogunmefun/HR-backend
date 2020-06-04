const router = require('express').Router();
const onboardingRoute = require('./onboarding')
const recruitmentRoute = require('./recruitment')


router.use('/company', onboardingRoute);
router.use('/recruitment', recruitmentRoute);
//router.post('/update', updateCompanyRecord);


module.exports = router;