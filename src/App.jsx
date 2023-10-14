import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import Tour from './pages/Tour'

function App() {
  return <BrowserRouter>
    <SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </SideBar>
  </BrowserRouter>
}

export default App
