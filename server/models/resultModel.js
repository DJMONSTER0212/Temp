const mongoose = require("mongoose")

const resultSchema = mongoose.Schema({
    examName:{
        type: String,
        required : true
    },
    mathsMarks: {
        type: Number,
        required: true
    },
    physicsMarks: {
        type: Number,
        required: true
    },
    chemistryMarks: {
        type: Number,
        required: true
    },
    csmarks: {
        type: Number,
        required: true
    },
    englishMarks: {
        type: Number,
        required: true
    },
    overall:{
        type: String,
        required : true
    },
    student : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true
    }
},{
    timestamps : true
})

const Result = mongoose.model("Result",resultSchema)
module.exports = Result