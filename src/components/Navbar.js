import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav>
    <i class="icon-camera-retro icon-5x"></i> 
        <div className='t1'>
            <h3>Analytic dashboard</h3>
            <p>Dashboard is an online report where your website data from ecommerse to web analytics</p>
          </div>
        <div className='t2'>
          <i class="icon-plus icon-2x"></i>
         <button>Add New</button>
        </div>
        

    </nav>
    </>
  )
}

export default Navbar