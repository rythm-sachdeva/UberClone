import userModel from "../models/user.model.js";


const createUser = async (firstname,lastname,email,passwordhash)=>{

    if(!firstname)
    {
        throw new Error("FirstName not present")
    }
    if(!email)
    {
      throw new Error('email not present')
    }
    if(!passwordhash)
    {
        throw new Error('All fields not present')
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