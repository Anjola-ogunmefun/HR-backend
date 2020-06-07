const companyServices = require('../services/index')
const AuthServices = require('../services/auth')
const  {User, validate } = require("../models/user_model");

class AuthController {
    login(req, res){
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        //find an existing user
         let user =  new AuthServices().findOne({email:req.body.email })
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
    };
};

module.exports = AuthController;