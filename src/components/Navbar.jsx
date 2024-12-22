import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logos/jobLogo.png'


const Navbar = () => {

  return (
    <>
      <div className='flex h-20 items-center justify-between bg-yellow-500 drop-shadow-lg fixed top-0 w-screen'>
        <div className='mx-5'>
          <img src={Logo} alt="" className='h-48' />
        </div>
        <nav className='m-5 flex gap-5 items-center'>
          <div className='flex gap-10 pr-20'>
          <Link to="/job" className='text-lg uppercase font-bold text-black hover:text-white'>Jobs</Link>
          <Link to="/" className='text-lg uppercase font-bold text-black hover:text-white'>Home</Link>
          </div>
          <Link to="/login" className='px-6 py-2  border-2 border-yellow-500 text-white bg-red-600 rounded-md'>Login</Link>
          <Link to="register" className='px-6 py-2 border-2 border-yellow-500 text-white bg-green-900 rounded-md'>Register</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
