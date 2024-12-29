import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.services.js"
import blacklistToken from "../models/blacklistTokens.model.js";


const registerUser = async (req,res,next) =>
{
 const errors = validationResult(req);
 if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    } 

    const {fullname,email,password} = req.body;
    console.log(fullname)

    const hashedPassword = await userModel.hashPassword(password)

    const user = await createUser(fullname.firstname , fullname.lastname,email,hashedPassword);
    const token = user.generateAuthToken()
    res.cookie('token',token)

    res.status(201).json({token,user})
    
    
}

const loginUser = async (req,res,next)=>{
const errors = validationResult(req)
if(!errors.isEmpty())
{
    return res.status(400).json({errors : errors.array()});
}
const {email, password} = req.body;

const user = await userModel.findOne({email}).select('+password');
if(!user)
{
    return res.status(401).json({message : 'Invalid email or password'});
}
const isMatch = await user.comparePassword(password)
if(!isMatch)
{
    res.status(401).json({message: 'Invalid Email or Password'})
}
const token = user.generateAuthToken();
res.cookie('token',token)

return res.status(200).json({token })
}

const userDetails = async (req,res,next)=>{
const user = req.user;
const userDet = {
    fullname: user.fullname,
    email: user.email
};
return res.status(200).json({userDet})

}

const logoutUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; 
    res.clearCookie('token')

    try {
        await blacklistToken.create({token});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"couldn't Log out due to  internal server error"})
    }

    return res.status(200).json({message:"Logout Successfull"})

    
}


export {registerUser,loginUser,userDetails,logoutUser}