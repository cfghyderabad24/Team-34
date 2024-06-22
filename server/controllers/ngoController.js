const Student = require('../models/Student');
const ngo = require('../models/NGO')

exports.UploadStudentData = async (req,res) =>{
  const {name,email,gender,college,stream,yearOfGraduation,occupation,status,Grade12,yearOfScholarship,amount} = req.body;
  console.log({name});
  try {
    const stu = await Student.findOne({email});
    console.log(stu)
    if(stu)
      {
       return res.status(400).json({msg : "Student is already Registered. Check for renewal"});
      }
      else{
        student = new Student({ name,email,gender,college,stream,yearOfGraduation,occupation,status,Grade12,yearOfScholarship,amount
        });
         await student.save();
         return res.status(200).json({msg : "Student Registered Successfully"});
      }

  } catch (error) {
    console.log(error);
    return res.status(500).json({msg : "Server Error"});
  }
} 