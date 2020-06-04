const onboardingRoute = require('express').Router();
const { createCompanyRecord, getAllCompany, getCompany, getCompanyByEmail, deleteCompanyRecord, deleteCompanyRecordByEmail, updateCompanyRecord, updateCompanyRecordByEmail } = require('../controllers/onboardingController');


onboardingRoute.post('/', createCompanyRecord);
onboardingRoute.get('/', getAllCompany);
onboardingRoute.get('/:companyId', getCompany);
onboardingRoute.get('/:companyEmail', getCompanyByEmail);
onboardingRoute.delete('/:companyId', deleteCompanyRecord);
onboardingRoute.delete('/:companyEmail', deleteCompanyRecordByEmail);
onboardingRoute.put('/:companyId', updateCompanyRecord);
onboardingRoute.put('/:companyEmail', updateCompanyRecordByEmail);







module.exports = onboardingRoute;