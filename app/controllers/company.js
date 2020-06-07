const companyServices = require('../services/company');
const sendEmail = require('../services/mail');

class companyController {
    inviteCompany(req, res){
        const { email, name, token } = req.body;

        if(Object.keys(req.body).length === 0) {
            return res.status(400).send(`We are not here to joke!,  
                                        Field cannot be empty`)
    
        }
        if(!name || !email || !token){
            return res.send('kindly add name, token, email to body')
        }
            
        const newCompany = {
            name,
            email,
            token
        }
    
    
        return new companyServices().createCompany(newCompany)
            .then((data) => {
                sendEmail(email, name, token)
                console.log('A new company was added', data)
                return res.status(201).send({
                    code: 201,
                    error: false,
                    message: `${name} has been added successfully`,
                    data: newCompany
                });
            })
            .catch((error) => {
                console.log('There was an error saving the data', error)
                return res.status(500).send({
                    code: 500,
                    error: true,
                    message: "Could not save record!"
                });
            });
        };
        

        async updateCompany(req, res){
            const { email, sector, staffSize, country, phoneNumber, address, description, state, departments } = req.body;
            if(!email || !sector || !phoneNumber || !address || !departments){
                return res.send({
                    error: true,
                    code: 400,
                    message: "email, sector, phoneNumber, address, departments are required"
                })
            }

            let params = {
                sector,
                phoneNumber,
                address,
                departments
            };

            if(staffSize !== undefined){
                params.staffSize = staffSize;
            };

            if(country !== undefined){
                params.country = country;
            };

            if(description !== undefined){
                params.description = description;
            };

            if(state !== undefined){
                params.state = state;
            };

            if(departments !== undefined){
                params.departments = departments;
            };

            try {
                // check if company exist
                const company = await new companyServices().findOne(email);
                if(!company){
                    return res.send({
                        error: true,
                        code: 401,
                        message: "Company needs to be registered first"
                    })
                };

           

                // update the record
                const updatedRecord = await new companyServices().updateCompany(email, params);
                return res.send({
                    error: false,
                    code: 202,
                    message: "Company record updated successfully",
                    updatedRecord
                })
            } catch(error){
                console.log('There was an error updating the company', error)
                return res.status(500).send({
                    code: 500,
                    error: true,
                    message: "Could not save record!"
                });
            }
        }
};


module.exports = companyController;