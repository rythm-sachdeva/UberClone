import mongoose, { Schema } from "mongoose";
import { compare,hash } from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new Schema({
   fullname:{
    firstname:{
        type:String,
        required:true,
        minlength: [3,'First name must be at least 3 characters'],
    },
    lastname:{
        type:String,
        minlength: [3,'First name must be at least 3 characters'],
    }
   },
   email:{
    type:String,
    required:true,
    unique:true,
    minlength:[5,'Email must be at least 5 characters']
   },
   password:{
    type:String,
    required:true,
    select:false
   },
   socketId:{
    type:String,
   }

},{timestamps:true})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function(password)
{
return await compare(password,this.password)
}
userSchema.statics.hashPassword = async function(password) {
    const hashpass = await hash(password,10)
    return hashpass
}

const user = mongoose.model('User',userSchema);

export default user