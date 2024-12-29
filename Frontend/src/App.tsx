import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignup"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user-login" element={<UserLogin/>} />"
        <Route path="/user-register" element={<UserSignUp/>} />
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-register" element={<CaptainSignUp/>}/>
        <Route path = "/home" element={<div>Welcome to Uber</div>}/>
      </Routes>
      
    </div>
  )
}

export default App