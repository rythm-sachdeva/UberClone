import { Schema,model } from "mongoose";

const blacklisttokenSchema = new Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires:86400 // 24 Hours
    }
})

const blacklistToken =  model('blacklistToken',blacklisttokenSchema);

export default blacklistToken;