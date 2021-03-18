const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  regno: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  details:{type:Object,default:null},
});

// const detailSchema = new mongoose.Schema({
//   address: { type: String, required: true },
//   email: { type: String, required: true },
//   fathersName:{type:String,required:true},
//   MothersName:{type:String,required:true},
//   DOB:{type:Date,required:true},
//   Gender: { type: String, required: true },
//   panNumber:{ type: String},
//   passportNumber:{ type: String },
//   phoneNumber: { type: String, required: true },
//   aadharNumber: { type: String, required: true },
//   hscMark: { type: String, required: true },
//   hscPercentage: { type: String, required: true },
//   cutOff: { type: String, required: true },
//   sslcMark: { type: String, required: true },
//   sslcPercentage: { type: String, required: true },
//   semesterOne: { type: String, required: true },
//   semesterTwo: { type: String, required: true },
//   semesterThree: { type: String, required: true },
//   semesterFour: { type: String, required: true },
//   semesterFive: { type: String, required: true },
//   semesterSix: { type: String, required: true },
//   semesterSeven: { type: String, required: true },
//   semesterEight: { type: String, required: true },
//   overAllCGPA: { type: String, required: true },
// });

module.exports = mongoose.model("student", studentSchema);
