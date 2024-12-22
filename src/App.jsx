import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import JobsPages from './pages/JobsPages'
import LoginPages from './pages/LoginPages'
import RegisterPage from './pages/RegisterPage'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/job' element={<JobsPages/>}/>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App
