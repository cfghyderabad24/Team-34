const vol = require('../models/Volunteer')
const ngo = require('../models/NGO')
const Student = require('../models/Student')

exports.ViewNgo = async(req,res)=>{
  try {
    const Ngos = await ngo.find().select('-password');
    return res.status(200).json(Ngos);
  } catch (error) {
    console.log(error)
    return res.status(500).json({msg : "Server Error"});
  }
}

exports.ViewStudents = async (req, res) => {
  const { email } = req.query;

  try {
    // Find the NGO by email
    const Ngo = await ngo.findOne({ email });

    if (!Ngo) {
      return res.status(400).json({ msg: "NGO Data Not Found" });
    }

    // Extract student details
    const studentEmails = Ngo.students.map(student => student.email);
    const students = await Student.find({ email: { $in: studentEmails } });

    console.log(students);

    // Filter students based on Grade12 score
    const studentUpdated = students.filter(student => student.Grade12 >= 60);
    console.log(studentUpdated);
    const notApproved = students.filter(student => student.Grade12 < 60);
    
    // Check color condition
    const color = studentUpdated.length > 0 ? 'Green' : 'Red';
    console.log(color);
    return res.status(200).json({ msg: "Student Data", studentUpdated, notApproved });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};


// exports.ViewStudents = async(req,res) =>{
//   const {email} = req.body;
//   try {
//     const students = await ngo.find({email});
//     if(!student)
//       {
//         return res.status(400).json({msg : "Student Data Not Found"});
//       }
//     const color = 'Red'
//     const studentUpdated = student.filter(student => student.Grade12 >= 60);
//     const notApproved = student.filter(student => student.Grade12 < 60);
    
//     if(studentUpdated.Grade12 >= 60)
//       {
//         color = 'Green';
//         console.log(color)
//       }
    
//     console.log(student.Grade12);
//     return res.status(200).json({msg : "Student Data",studentUpdated,notApproved});
    
    
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({msg : "Server Error"});
//   }
// }