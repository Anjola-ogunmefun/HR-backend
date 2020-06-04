const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Portfolio-project')
.then(()=> console.log('connected to Mongodb')) 
.catch((error)=> console.log('error connecting to Mongodb', error)) 

const { Schema } = mongoose;

const RecruitmentSchema = new Schema({
    mailAddress: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
      },
      stateOfOrigin: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    nationality: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25
    },
    contactAddress: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1500
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

const RecruitmentModel = mongoose.model('recruitment', RecruitmentSchema);

module.exports = RecruitmentModel;