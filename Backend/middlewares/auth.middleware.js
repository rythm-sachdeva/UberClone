import { response } from "express";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import blacklistToken from "../models/blacklistTokens.model.js";
import captainModel from "../models/captain.model.js";

const authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:"User not authenticated"});
    }
    
    const isBlacklisted = await blacklistToken.findOne({token:token})
    if(isBlacklisted)
    {
        return res.status(401).json({message:"User not Authenticated"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message:"User not authenticated"})
    }
}

const authCaptain = async(req,res,next)=>{
    const token= req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:'Captain not authenticated'});
    }
    const isBlacklisted = await blacklistToken.findOne({token:token});
    // console.log(isBlacklisted);
    if(isBlacklisted)
    {
        return res.status(401).json({message:'Captain not authenticated'});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({message:'Captain not authenticated'});
    }
}
export {authUser,authCaptain};