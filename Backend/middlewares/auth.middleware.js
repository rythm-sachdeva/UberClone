import { response } from "express";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import blacklistToken from "../models/blacklistTokens.model.js";

const authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token )
    {
        return res.status(401).json({message:"User not authenticated"});
    }
    
    const isBlacklisted = blacklistToken.findOne({token:token})
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
export {authUser}