import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const CaptainProtectedWrapper = ({children}:{children:any}) => {
 const token = localStorage.getItem('token')
 const navigate = useNavigate();

 if(!token)
 {
    useEffect(()=>{
        navigate('/captain-login')
    },[])
 }
  
 
  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectedWrapper