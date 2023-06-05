const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sanjayappari:sanjay@cluster0.k27um1f.mongodb.net/BlogApp";

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI,await console.log('Connected to Mongodb'));
}

module.exports = connectToMongo;
