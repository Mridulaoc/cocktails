import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! this is dead end</h1>
        <Link to="/"> <button className="btn">back home</button></Link>
      </div>
    </section>
  )
}

export default Error
