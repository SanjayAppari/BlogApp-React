const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/BlogApp";

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI,await console.log('Connected to Mongodb'));
}

module.exports = connectToMongo;
