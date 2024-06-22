const Student = require('../models/Student');

exports.Login = async (req,res) =>{
  const { email ,password} = req.body;
  try {
    const ngo = await Student.findOne({email});
    if(!ngo)
      {
        return res.status(400).json({msg : "Student Not found"});
      }
      if(ngo.password===password)
        {
          return res.status(200).json({msg : "Login Success"});
        }
  } catch (error) {
    console.error(error);
      return res.status(500).json({ msg: "Server Error" });
  }
}