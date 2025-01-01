import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const UserProtectedWrapper = ({children}:{children:any}) => {
 const token = localStorage.getItem('token')
 const navigate = useNavigate();

 if(!token)
 {
    useEffect(()=>{
        navigate('/user-login')
    },[])
 }
  
 
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper