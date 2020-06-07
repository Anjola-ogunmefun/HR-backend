const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Portfolio-project')
.then(()=> console.log('connected to Mongodb')) 
.catch((error)=> console.log('error connecting to Mongodb', error)) 

const { Schema } = mongoose;

const UpdateSchema = new Schema({
    sector: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
      },
      staffSize: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 1000
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1500
    },
    description: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 1000
    },
    department: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    state: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    }
}, {
  timestamps: true,
}
);

const UpdateModel = mongoose.model('company update', UpdateSchema);

module.exports = UpdateModel;