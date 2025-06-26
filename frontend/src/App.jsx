import Navbar from './components/navbar/Navbar'
//import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import TaskManager from './components/TaskManager'

function App() {

  return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <Navbar/>
          <BrowserRouter>
            <Routes>
              {/* <Route path='/' element={<Home/>} />
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='/dashboard' element={<Dashboard/>} /> 
            </Routes>
          </BrowserRouter>

          

        </div>
  )
}

export default App;
