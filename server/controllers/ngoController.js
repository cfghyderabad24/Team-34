const Student = require('../models/Student');
const NGO = require('../models/NGO'); // Import your NGO model

exports.UploadStudentData = async (req, res) => {

    const { ngoId, name, email, gender, college, stream, yearOfGraduation, occupation, Grade12, yearOfScholarship, amount } = req.body;
    try {
        // Check if the student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ msg: "Student is already registered. Check for renewal." });
        }
        console.log(existingStudent);
        // Create a new student document
        const newStudent = new Student({
            name, email, gender, college, stream, yearOfGraduation, occupation,
            Grade12, yearOfScholarship, amount, password: email, status: "Uploaded", approved: "Approved"
        });

        // Save the new student document
        await newStudent.save();
        console.log(newStudent);
        // Find the NGO by ngoId
        const ngo = await NGO.findOne({ ngoId });
        // Push the new student data into the NGO's students array
        ngo.students.push({ email});
        await ngo.save();

        return res.status(200).json({ msg: "Student registered successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server Error" });
    }
};

exports.ViewApproved = async (req, res) => {
  const { ngoId } = req.query;

  try {
      const ngo = await NGO.findOne({ ngoId });

      if (!ngo) {
          return res.status(404).json({ msg: "NGO not found" });
      }
      const studentEmails = ngo.students.map(student => student.email);
      const approvedStudents = await Student.find({ email: { $in: studentEmails }, approved: 'Approved' });

      return res.status(200).json({ msg: "Approved Students", students: approvedStudents });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Server Error" });
  }
};

exports.Login = async (req,res) =>{
  const { email ,password} = req.body;
  try {
    const ngo = await NGO.findOne({email});
    if(!ngo)
      {
        return res.status(400).json({msg : "NGO Not found"});
      }
      if(ngo.password===password)
        {
          return res.status(200).json({msg : "Login Success"});
        }
  } catch (error) {
    console.error(error);
      return res.status(500).json({ msg: "Server Error"});
}
}