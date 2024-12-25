import captainModel from "../models/captain.model.js";

const createCaptain = async (fullname,email,vehicle,passwordhash)=>{
    if(!fullname || !email || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType || !passwordhash)
    {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({fullname,email,vehicle,password:passwordhash});
    return captain;
    
}

export {createCaptain};