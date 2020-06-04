const EmployeeModel = require('../models/update');

//  to add new employee
const createEmployeeRecord = async (req, res) => {
    try {
        const {mailAddress, nationality, phoneNumber, stateOfOrigin, contactAddress, department  } = req.body;
      
        var employee= new UpdateModel({
            mailAddress,
            phoneNumber,
            nationality,
            stateOfOrigin,
            contactAddress,
            department
        });
        
        const  data = await employee.save();
    
        return res.status(200).send({
            message:'Employee record created successfully',
            data
        })
    } catch (error) {
        return res.status(500).send({
            code: 500,
            error: true,
            message: 'Employee record could not be created'
        })
    }
        
    }
    
    module.exports = {createEmployeeRecord}