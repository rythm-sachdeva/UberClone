import { Schema,model, mongo } from "mongoose";
import { compare,hash } from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3,"First name must be at least 3 characters long"]
        },
        lastname:{
            type: String,
            required: true,
            minlength: [3,"Last name must be at least 3 characters long"]

        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
   
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum: ['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required:true,
            minlength:[3,'Color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate Must be at least 3 characters']
        },
        capacity:{
            type:Number,
            required:true,
            min: [1,'Min Capacity Should be 1']
        },
        vehicleType:{
            type:String,
            required: true,
            enum:['car','motorcycle','auto']
        },
        loaction:{
            lat:{
                type: Number,
            },
            lng:{
                type: Number
            }
        }
    },
    password:{
        type:String,
        required:true,
        select:false
       }

})

captainSchema.methods.generateAuthToken =  function()
{
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await compare(password,this.password)
}
captainSchema.statics.hashPassword = async function(password)
{
    return await hash(password,10);
}

const captainModel = model('Captain', captainSchema)
export default captainModel;