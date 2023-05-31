const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlogSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:"General"
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    comment:[
        {
            text: String,
            date:{ type:Date, default: Date.now },
            postedby : {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
        }
    ]
});


module.exports = mongoose.model('blog',BlogSchema);