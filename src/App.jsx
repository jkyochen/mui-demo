import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SideBar from './components/SideBar'

function App() {
  return <BrowserRouter>
    <SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SideBar>
  </BrowserRouter>
}

export default App
