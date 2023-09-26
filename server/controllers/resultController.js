const Result = require("../models/resultModel");

const createResult = async (req,res)=>{
    try {
        const {userId,examName,mathsMarks,physicsMarks,chemistryMarks,csmarks,englishMarks,overall} = req.body;
        if(!userId||!mathsMarks||!physicsMarks||!chemistryMarks||!csmarks||!englishMarks||!overall){
            return res.status(401).json({message:"Please fill all fields"});
        }

        const result = await Result.create({
            examName,
            mathsMarks,
            physicsMarks,
            chemistryMarks,
            csmarks,
            englishMarks,
            overall,
            student: userId
        })
        if(!result){
            return res.status(400).json({message:"Unable to create User"});
        }
        else {
            return res.status(200).json({message : "Result Created SuccessFully"});
        }

    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}

const getResult = async (req,res)=>{
    try {
        const {userId} = req.params;
        // console.log(userId)
        const results = await Result.find({
            student : userId
        })
        if(!results){
            return res.status(404).json({message : "No result Found"});
        }
        else {
            return res.status(200).send(results);
        }
    } catch (error) {
        return res.status(500).json({error : error});
    }
}

module.exports = {createResult,getResult}