const AuthServices = require('../services/auth')
const  {User, validate } = require("../models/user_model");

class AuthController {
    async login(req, res){
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        //find an existing user
        try {
            let user =  await new AuthServices().findOne(req.body.email)
            console.log('login', user)
            if (user) return res.status(400).send("User already registered.");
       
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
};

module.exports = AuthController;