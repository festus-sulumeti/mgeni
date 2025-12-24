import { Routes, Route } from 'react-router-dom'
import Hero from './components/HeroSecction/Hero'
import SupportTeam from './components/SupportTeam'
import LoginPage from './Auth/Login'
import SignupPage from './Auth/Signup'
import ForgotPassword from './Auth/ForgotPassword'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/support' element={<SupportTeam />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
