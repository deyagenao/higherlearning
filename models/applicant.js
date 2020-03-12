var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
  firstName: {
    type: String, 
    required: true,
    trim: true
  },
  lastName: {
    type: String, 
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  major: {
    type: String, 
    required: true,
    trim: true
  },
  personalStatementType: {
    type: String,
    required: true,
    trim: true
  },
  personalStatement: {
    type: String,
    required: true
  },
  acceptanceProof: {
    type: String, 
    required: true,
    trim: true
  }
})

var Applicant = mongoose.model('Applicant', ApplicantSchema);
module.exports = Applicant;