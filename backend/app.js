const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const app=express();
const port=1708

connectToMongo();
app.use(cors());
app.use(express.json());

// All My Blog Routes 
app.use('/api/auth',require('./routes/auth.js'));  // For Login and SignUp routes
app.use('/api/blog',require('./routes/blog.js'));  // For blog 

app.listen(port, ()=>{
    console.log(`Blog Backend Server Started on port ${port}`)
})