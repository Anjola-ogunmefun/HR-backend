const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
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
     token: {
      type: String,
       required: true,
       unique: true
      },
      inviteTokenExpired:{
       type: Boolean,
       default: false,
       required: true
      },
      status:{
       type: String,
       enum: ['pending', 'invited', 'expired', 'active'],
       default: 'pending',
       required: true
      },
     sector: {
      type: String,
      minlength: 1,
      maxlength: 50
    },
    staffSize: {
      type: Number,
      minlength: 1,
      maxlength: 1000
    },
    country: {
      type: String,
      default: "Nigeria"
    },
    phoneNumber: {
        type: String,
        minlength: 1,
        maxlength: 25
    },
    address: {
        type: String,
        minlength: 1,
        maxlength: 1500
    },
    description: {
      type: String,
      minlength: 1,
      maxlength: 1000
    },
    departments: {
        type: [String],
        minlength: 1,
        maxlength: 50
    },
    state: {
        type: String,
        minlength: 1,
        maxlength: 50
    },
    resends:{
      type: Number,
      default: 0
    },
    //give different access rights if admin or not 
    isAdmin: Boolean
    },{
      timestamps: true
    }

);

const CompanyModel = mongoose.model('newcompany', CompanySchema);

exports.Company = CompanyModel;

