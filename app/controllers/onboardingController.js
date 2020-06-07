const OnboardingController = require('../services/onboarding');
const UpdateModel = require('../models/update');


//delete  company record by company id
class OnboardingController {
    deleteCompanyRecordById = async (req, res) =>{
        const company = await UpdateModel.findById(req.params.companyId);
        
        if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });

        await UpdateModel.findByIdAndRemove(req.params.companyId);

        return res.send({
            code: 200,
            error: false,
            message: 'company record was deleted successfully',
            
        });
    };  
    
    
    //update  company record by company id
updateCompanyRecordById = async (req, res) =>{
    const company = await UpdateModel.findById(req.params.companyId);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });
        
    const updatedRecord = await UpdateModel.findByIdAndUpdate(req.params.companyId,
        {set:req.body}, {new: true});

    return res.status(200).send({
        message:'company record was updated successfully',
        data: updatedRecord
    })
}

};

module.exports = OnboardingController;
