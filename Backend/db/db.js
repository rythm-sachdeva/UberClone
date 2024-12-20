import mongoose from "mongoose";

const connectDb = async ()=>
{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_CONNECT_URI}/${process.env.MONGODB_DATABASE}`)
        console.log("MongoDB Connection successful")
    } catch (error) {
        console.log("Error while connceting to mongoDB",error)
    }
}

export default connectDb