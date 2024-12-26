import { Link } from "react-router-dom"
import { useState } from "react";
import React from "react";
interface CaptainLoginProps {  
    email:string,
    password:string
}

const CaptainLogin = () => {
   const [email, setEmail] = useState<string>("");
   const [password,setPassword] = useState<string>("");
   const [captainLogin, setCaptainLogin] = useState<CaptainLoginProps>({
       email:'',
       password:''
   })
   const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setCaptainLogin({
            email:email,
            password:password
        });
        setEmail('');
        setPassword('');
   }

  return (
    <div>
    <img src="UberLogo.svg" alt="Uber Logo" className="w-16 ml-8 pt-8 pb-8" />
    <div className="p-7">
        
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className="text-xl pl-2 font-semibold mb-2">What's Your Email</h3>
            <input
             required
             type="email"
             className="bg-[#eeeeee] p-2 w-full rounded-lg mb-7 placeholder:text-sm"
             placeholder="email@example.com" 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
            <h3 className="text-xl pl-2 font-semibold mb-2">Password</h3>
            <input 
            type="password" 
            className="bg-[#eeeeee] p-2 w-full border rounded-lg mb-7 placeholder:text-sm"
            placeholder="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
             />
            <button className="bg-black text-white w-full font-semibold py-2 rounded-lg" type="submit">Login</button>
          <p className="text-center mt-1">New Here? <Link to="/captain-register" className="text-blue-600">Create New Captain Account</Link></p>
        </form>
    </div>
    </div>
  )
}

export default CaptainLogin