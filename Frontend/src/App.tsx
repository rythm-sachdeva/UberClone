import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user-login" element={<UserLogin/>} />"
        <Route path="/user-register" element={<div>User Registration</div>} />
        <Route path="/captain-login" element={<div>Captain Login</div>}/>
      </Routes>
      
    </div>
  )
}

export default App