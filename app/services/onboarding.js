const {company} = require("../models/company");
class onboardingServices {
   updateCompanyRecord(Id){ 
        return company.create(Id);
    };
    updateCompanyRecord(Email){ 
        return company.create(Email);
    };

    deleteCompanyRecord(Id){
        return company.delete({Id});
    };
    deleteCompanyRecord(Email){
        return company.delete({Email});
    };


};

module.exports = onboardingServices;

















// class MainServices {
//     getRandomNumber(){
//         return Math.random();
//     }
// };

// module.exports = MainServices;