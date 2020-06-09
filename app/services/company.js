const {Company} = require("../models/company");

class companyServices {
    createCompany(param){
        return Company.create(param);
    };

    findOne(email){
        return Company.findOne({ email });
    };

    updateCompany(email, params){
        return Company.findOneAndUpdate({email}, {$set: params}, {new: true})
    }
};


module.exports = companyServices;