const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));



// //Routes
 const Ngo = require('./routes/Ngo.router');
const student = require('./routes/Student.router');

// // Usage
app.use('/cfg34/ngo',Ngo);
app.use('/cfg34/student',student);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


// app.get("/all",(req,res)=>{
//   let products=  Student.find({})
//   console.log("ALL products Fetched")
//   res.send(products);
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});