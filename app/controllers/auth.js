const AuthServices = require('../services/auth')
const companyServices = require('../services/company')
const  {User, validate } = require("../models/user_model");
const sendEmail = require('../services/mail')
class AuthController {
    async login(req, res){
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        //find an existing user
        try {
            let user =  await new AuthServices().findOne(req.body.email)
            console.log('login', user)
            if (user) return res.status(400).send({
                error: true,
                code: 400,
                message: "User already registered"
            })
       
           user = new User({
           name: req.body.name,
           email: req.body.email
           });
           user.save()
   
           const token = new AuthServices().login(user)
           console.log('token:', token)
           res.header("x-auth-token", token).send({
           _id: user._id,
           name: user.name,
           email: user.email, 
           token
           });
        } catch(err){
            console.log('error', err)
            return res.send({
                error: true,
                code: 500,
                message: "Internal server error"
            })
        }
        
    };

    

    async resendEmail(req, res){
        
        const { email, name} = req.body;
        const { error } = validate(req.body);
        if(!email || !name){
            return res.status(400).send({
                error: true,
                code: 400,
                message: "please add email and name"
            })
        }
        
         let user = User({
            name: req.body.name,
            email: req.body.email
        });
        const token = user.generateAuthToken();

        res.header("x-auth-token", token).send({
            _id: user._id,
            name: user.name,
            email: user.email, 
            token
            })

        if(error){
            console.log('error', error)
            return res.send({
                error: true,
                code: 500,
             message: "Internal server error"
                })
            } 


        const companyRecord = await new companyServices().findOne(email);
        const addOne = companyRecord.resends + 1;

        if(!companyRecord){
            return res.send({
                error: true,
                code: 404,
                message: "Company not registered"
            })
        }
    
        if(companyRecord.inviteTokenExpired === true){
            companyRecord.resends = addOne
            companyRecord.save()
            console.log(companyRecord.resends)
        }

         return sendEmail(email, name, token)
         
        }

};

module.exports = AuthController;