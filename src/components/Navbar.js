import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import '../App.css'

const h2 = () => {
  return (
    <div>
          <nav className="nav-bar">
              <div className="nav-center">
                  <div className="logo">
                      <Link to="/">
                          <img src={logo} alt="logo" />
                      </Link>
                    </div>              
              <ul className='links'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
              </ul>   
               </div>    
        </nav>
    </div>
  )
}

export default h2
