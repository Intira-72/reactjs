import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';

const Nav = () => {
  return (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='menu/' element={ <Menu /> } />
            <Route path='contact/' element={ <Contact /> } />
            <Route path='*' element={<h1>YOU ARE NOT IN A PAGE</h1>} />
        </Routes>
    </Router>
  )
}

export default Nav