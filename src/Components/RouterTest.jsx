import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home(){
    return (
        <h1 className='text-center'>Home page</h1>
    )
}

function About(){
    return (
        <h1>About page</h1>
    )
}

function ContactUs(){
    return (
        <h1>Contact us page</h1>
    )
}

export default function RouterTest() {
  return (
    <BrowserRouter>
    <div>
        <nav>
            <ul className='nav justify-content-center'>
                <li className='nav-item me-3'><Link to='/'>Home</Link></li>
                <li className='nav-item me-3'><Link to='/about'>About</Link></li>
                <li className='nav-item me-3'><Link to='/contactUs'>Contact Us</Link></li>
            </ul>
        </nav>
    </div>
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}
