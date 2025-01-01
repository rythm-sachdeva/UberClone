import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";

const UserLogOut = () => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate();

 useEffect(()=>{
  axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{  headers: { 
    'Authorization': `Bearer ${token}` 
  }}).then((response)=>{
    if(response.status===200)
    {
      localStorage.removeItem('token')
      navigate('/user-login')
    }
  }).catch((err)=>{
    console.log(err)
  }
  )
 },[])


  return (
    <div>UserLogOut</div>
  )
}

export default UserLogOut