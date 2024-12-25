import { Link } from "react-router-dom"


const UserLogin = () => {
  return (
    <div>
    <img src="UberLogo.svg" alt="Uber Logo" className="w-16 ml-8 pt-8 pb-8" />
    <div className="p-7">
        
        <form action="">
            <h3 className="text-xl pl-2 font-semibold mb-2">What's Your Email</h3>
            <input
             required
             type="email"
             className="bg-[#eeeeee] p-2 w-full rounded-lg mb-7"
             placeholder="email@example.com" 
             />
            <h3 className="text-xl pl-2 font-semibold mb-2">Password</h3>
            <input 
            type="password" 
            className="bg-[#eeeeee] p-2 w-full border rounded-lg mb-7"
            placeholder="password" />
            <button className="bg-black text-white w-full font-semibold py-2 rounded-lg">Login</button>
          <p className="text-center mt-1">New Here? <Link to="/user-register" className="text-blue-600">Create New Account</Link></p>
        </form>
        <Link to="/captain-login" className="flex mt-14">
            <button className="bg-[#6b6b6b] text-gray-200 w-full font-semibold py-2 rounded-lg">Login as Captain</button>
        </Link>
    </div>
    </div>
  )
}

export default UserLogin