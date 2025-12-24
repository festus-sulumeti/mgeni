import { Routes, Route } from 'react-router-dom'
import Hero from './components/HeroSecction/Hero'
import SupportTeam from './components/SupportTeam'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/support' element={<SupportTeam />} />
      </Routes>
    </>
  )
}

export default App
