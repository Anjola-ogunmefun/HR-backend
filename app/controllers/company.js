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
        
    

    validateToken(req, res){
        const { email, token } = req.query
        if(!email || !token){
            return res.status(400).send({
                error: true,
                code: 400,
                message: "token and email must be passed to the query parameter"
                })
             }
           return this.checkIfTokenExpired(email, token, res)
        }
    
       
        async checkIfTokenExpired(email, token, res){
            const companyRecord = await new companyServices().findOne(email);
            console.log(companyRecord)
            if(!companyRecord){
                return res.send({
                    error: true,
                    code: 404,
                    message: "Company not registered"
                })
            }
            console.log(companyRecord.token)
            if(companyRecord.token !== token){
                return res.send({
                    error: true,
                    code: 401,
                    message: "Token does not match the required token"
                })
            }

            console.log('companyRecord', companyRecord)
            const creationTime = companyRecord.createdAt;
            console.log('creationTime', creationTime);
            console.log('creation time', creationTime.getTime())
            console.log('new time', new Date().getTime())
            
            let difference = new Date().getTime() - creationTime.getTime() 
    
            let daysDifference = Math.floor(difference/1000/60/60/24);
            difference = difference - daysDifference*1000*60*60*24
            if(daysDifference > 2){
                companyRecord.status = 'expired';
                companyRecord.inviteTokenExpired = true;
                companyRecord.save()
                return res.status(401).send({
                    error: true,
                    code: 401,
                    message: "Invite token has expired"
                })
                
            } else {
                companyRecord.status = 'active';
                companyRecord.inviteTokenExpired = false;
                companyRecord.save()
                return res.status(200).send({
                    error:false,
                    code: 200,
                    message: "Invite token is still valid"
                })
            }
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