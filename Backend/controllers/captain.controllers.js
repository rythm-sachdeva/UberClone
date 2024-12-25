import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.services.js";
import blacklistToken from "../models/blacklistTokens.model.js";



const registerCaptain = async ( req, res, next ) => {
   const errors = validationResult(req);
   if(!errors.isEmpty())
   {
    return res.status(400).json({errors:errors.array()});
   }

   const {fullname,email,vehicle,password} = req.body;
   const isCaptainAlreadyRegistered = await captainModel.findOne({email});
   if(isCaptainAlreadyRegistered)
   {
    return res.status(401).json({message:'Captain already registered'});
   }
   const hashedpassword = await captainModel.hashPassword(password);
   const captain = await createCaptain(fullname,email,vehicle,hashedpassword);
   const token = captain.generateAuthToken();
   res.cookie('token',token);
   res.status(201).json({fullname:captain.fullname,email:captain.email,vehicle:captain.vehicle});
}

const loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(401).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain)
    {
        return res.statues(401).json({message:'Invalid email or password'});
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch)
    {
        return res.status(401).json({message: 'Invalid email or password '});
    }
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    return res.status(200).json({token}); 
}

const captainDetails = async(req,res,next)=>{
    const captain = req.captain;
    const captainDet = {
        fullname : captain.fullname,
        email: captain.email,
        vehicle: captain.vehicle
    }
    return res.status(200).json({captainDet});
}
const logoutCaptain = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:'Captain not authenticated'});
    }
    res.clearCookie('token');
    try {
        
        await blacklistToken.create({token});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:'Failed to logout due to Internal server error'});
    }
}


export {registerCaptain,loginCaptain,logoutCaptain,captainDetails};