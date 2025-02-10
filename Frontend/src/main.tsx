import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.tsx'
import 'remixicon/fonts/remixicon.css'
import { CaptainContext } from './context/CaptainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContext>
    <CaptainContext>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
    </CaptainContext>
    </UserContext>
  </StrictMode>,
)
