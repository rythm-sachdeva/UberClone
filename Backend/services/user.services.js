import userModel from "../models/user.model.js";


const createUser = async (firstname,lastname,email,passwordhash)=>{

    if(!firstname || !email || !passwordhash)
    {
        throw new Error("All fields not present")
    }

    const user = await userModel.create({fullname:{
        firstname,
        lastname
    },
email,
password:passwordhash})
return user
}

export default createUser