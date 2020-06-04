const UpdateModel = require('../models/update');

//delete  company record by company id
const deleteCompanyRecord = async (req, res) =>{
    const company = await UpdateModel.findById(req.params.companyId);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });

     await UpdateModel.findByIdAndRemove(req.params.companyId);

    return res.status(200).send({
        message:'Company record was deleted successfully'
    })
}

//delete  company record by company Email
const deleteCompanyRecordByEmail = async (req, res) =>{
    const company = await UpdateModel.findByCompanyEmail(req.params.companyEmail);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });

     await UpdateModel.findByEmailAndRemove(req.params.companyEmail);

    return res.status(200).send({
        message:'Company record was deleted successfully'
    })
}

//update  company record by company id
const updateCompanyRecord = async (req, res) =>{
    const company = await UpdateModel.findById(req.params.companyId);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });
        
    const updatedRecord = await UpdateModel.findByIdAndUpdate(req.params.companyId,
        {set:req.body}, {new: true});

    return res.status(200).send({
        message:'Company record was updated successfully',
        data: updatedRecord
    })
}


//update  company record by company email
const updateCompanyRecordByEmail = async (req, res) =>{
    const company = await UpdateModel.findByEmail(req.params.companyEmail);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });
        
    const updatedRecord = await UpdateModel.findByEmailAndUpdate(req.params.companyEmail,
        {set:req.body}, {new: true});

    return res.status(200).send({
        message:'Company record was updated successfully',
        data: updatedRecord
    })
}

//get all company record
const getAllCompany  = async (req, res) =>{
    const companies = await UpdateModel.find();

    return res.status(200).send({
        message:'Company records were retrieved successfully',
        data : companies
    })
}

// get a single company by the company id
const getCompany  = async (req, res) =>{
    const company = await UpdateModel.findById(req.params.companyId);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });

    return res.status(200).send({
        message:'Company record was retrieved successfully',
        data : company
    })
}

// get a single company by the company email
const getCompanyByEmail  = async (req, res) =>{
    const company = await UpdateModel.findByEmail(req.params.companyEmail);

    if(!company)
        return res.status(404).send({
            message:'The company record does not exist!'
        });

    return res.status(200).send({
        message:'Company record was retrieved successfully',
        data : company
    })
}

// create a company profile
const createCompanyRecord = async (req, res) => {
try {
    const {sector, staffSize, country, phoneNumber, state, address, email, description, department  } = req.body;
  
    var company = new UpdateModel({
        sector,
        email,
        staffSize,
        country,
        phoneNumber,
        state,
        address,
        description,
        department
    });
    
    const  data = await company.save();

    return res.status(200).send({
        message:'Company record created successfully',
        data
    })
} catch (error) {
    return res.status(500).send({
        code: 500,
        error: true,
        message: 'Company record could not be created'
    })
}
    
}

module.exports = {createCompanyRecord, getAllCompany, getCompany, getCompanyByEmail, deleteCompanyRecord, deleteCompanyRecordByEmail, updateCompanyRecord, updateCompanyRecordByEmail}