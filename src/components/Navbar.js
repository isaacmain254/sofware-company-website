import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);

    const closeMobileMenu = () => setClicked(false);
    return (
        <nav className="navbar">
            <div className="logo" onClick={closeMobileMenu}>
                <i className="fas fa-circle-nodes"></i>linked<span>Tech</span>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className="menu-list">
                <li><NavLink className='menu-item' activeclassname="active" to="/" onClick={closeMobileMenu}>Home</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/services" onClick={closeMobileMenu}>Services</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/about" onClick={closeMobileMenu}>About</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/work" onClick={closeMobileMenu}>Work</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/testimonials" onClick={closeMobileMenu}>Testimonials</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/team" onClick={closeMobileMenu}>Team</NavLink></li>
                <li><NavLink className='menu-item' activeclassname="active" to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar
