import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SingleCocktail from './components/SingleCocktail'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Cocktail from './pages/Cocktail'
import './App.css'

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={< Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cocktail/:id" element={<Cocktail />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                
           </Router>
        </>
    
  )
}

export default App
