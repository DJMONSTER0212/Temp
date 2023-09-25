const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName : {
        type:String,
        required : true
    },
    rollno:{
        type:String,
        required : true,
        unique : true
    }
    ,
    mobileNo:{
        type: String,
        required : true
    },
    dob:{
        type:String,
        required : true
    },
    bGroup:{
        type:String,
        require : true
    },
    stream:{
        type : String,
        default:"CSE",
        required : true
    },
    password:{
        type : String,
        required  :true
    }
},{
    timestamps : true
})

const User =mongoose.model("User",userSchema);
module.exports = User