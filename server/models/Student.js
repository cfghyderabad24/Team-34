const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  gender:{type : String},
  college: { type: String },
  stream: { type: String },
  yearOfGraduation: { type: Number },
  occupation : {type:String},
  status : {type : String,required : true},
  Grade12 : {type : Number,required : true},
  yearOfScholarship : {type : Number},
  amount : {type : String},
  approved :{type : String},
  existingStudent : {type:Boolean},
  role : {type :String}
 }, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);