import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

interface UserSignUpProps {
    fullname:{
        firstName:string;
        lastName:string;
    }
    email:string;
    password:string;
}


const UserSignUp = () => {
   const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [userSignUp, setUserSignUp] = useState<UserSignUpProps>({
        fullname:{
            firstName:'',
            lastName:''
        },
        email:'',
        password:''
    })




   const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setUserSignUp({
          fullname:{
              firstName:firstName,
              lastName:lastName
          },
          email:email,
          password:password
      });
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    //   console.log(userSignUp);

   }


  return (
    <div>
    <img src="UberLogo.svg" alt="Uber Logo" className="w-16 ml-8 pt-8 pb-4" />
    <div className="p-7 flex flex-col gap-10">
        
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className="text-xl pl-2 font-semibold mb-2">What's Your Name</h3>
            <div className="flex justify-between gap-3">
            <input
             required
             type="text"
             className="bg-[#eeeeee] p-2 w-full rounded-lg mb-7 placeholder:text-sm"
             placeholder="First Name" 
             value={firstName}
             onChange={(e)=>{setFirstName(e.target.value)}}
             />
             <input
             required
             type="text"
             className="bg-[#eeeeee] p-2 w-full rounded-lg mb-7 placeholder:text-sm"
             placeholder="Last Name" 
             value={lastName}
             onChange={(e)=>{setLastName(e.target.value)}}
             />
            </div>
             <h3 className="text-xl pl-2 font-semibold mb-2">What's Your Email</h3>
            <input
             required
             type="email"
             className="bg-[#eeeeee] p-2 w-full rounded-lg mb-7 placeholder:text-sm"
             placeholder="email@example.com" 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
            <h3 className="text-xl pl-2 font-semibold mb-2"> Enter Password</h3>
            <input 
            type="password" 
            className="bg-[#eeeeee] p-2 w-full border rounded-lg mb-7 placeholder:text-sm"
            placeholder="password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="bg-black text-white w-full font-semibold py-2 rounded-lg">Register</button>
          <p className="text-center mt-1">Already have an Account? <Link to="/user-login" className="text-blue-600">Login Here</Link></p>
        </form>
        <p className="text-[10px] text-gray-700 mt-20  leading-tight" >By proceeding, you agree to get calls, WhatsApp or SMS Messages, included by automated means by Uber and its affiliates to the number provided.</p>
    </div>
    </div>
  )
}

export default UserSignUp