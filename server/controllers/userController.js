const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, rollno, mobileNo, dob, bGroup, stream, password } = req.body;

        if (!firstName || !lastName || !mobileNo || !dob || !bGroup || !stream || !password) {
            res.send({ status: 400, msg: "Enter all the Fields" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({
            rollno: rollno
        })
        if (existingUser) {
            res.send({ status: 500, msg: "User with this roll number already exists" });
        }

        else {
            const user = await User.create({
                firstName,
                lastName,
                mobileNo,
                dob,
                rollno,
                bGroup,
                stream,
                password: hashedPassword
            })

            res.send({ status: 200, msg: "User created Successfully!" })
        }


    } catch (error) {
        res.send({status : 500, msg:"Internal Server Error at Crete User"})
    }

}


const loginUser = async (req,res) =>{
    try {

        const {rollno,password}  = req.body;
        if(!rollno||!password) {
            res.status(400)
            throw new Error("Enter all the credentials")
        }

        const existingUser = await User.findOne({
            rollno: rollno
        })
        if(!rollno){
            res.status(404)
            throw new Error("User with this Roll number Doesn't exist")
        }

        const result  = await bcrypt.compare(password,existingUser.password);
        if(!result){
            res.status(400)
            throw new Error("Incorrect Credentials")
        }
        else {
            res.send({status : 200, userId : existingUser._id});
        }


    } catch (error) {
        console.log(error)
        res.send({status: 500, msg:'Internal Server Error at login User'})
    }
}

const getUser = async (req,res)=>{
    try {
        const {userId} = req.params;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        else {
            return res.status(200).send(user);
        }
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error at getUser"});
    }
}

module.exports = { createUser,loginUser, getUser }