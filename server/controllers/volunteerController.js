const vol = require('../models/Volunteer')
const ngo = require('../models/NGO')

exports.ViewNgo = async(req,res)=>{
  try {
    const Ngos = await ngo.find().select('-password');
    return res.status(200).json(Ngos);
  } catch (error) {
    console.log(error)
    return res.status(500).json({msg : "Server Error"});
  }
}

exports.ViewStudents = async(req,res) =>{
  const {email} = req.body;
  try {
    
    
  } catch (error) {
    
  }
}