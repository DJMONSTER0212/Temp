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


module.exports = { createUser,loginUser }