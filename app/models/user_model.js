const config = require('../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  
  //give different access rights if admin or not 
  isAdmin: Boolean
});


// //custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.keys.myprivatekey); //get the private key from the config file -> environment variable
  return token;
}
const User = mongoose.model('user', UserSchema);

//function to validate user 
function validateUser(user) {
  const schema = {
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    token: Joi.string()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;


