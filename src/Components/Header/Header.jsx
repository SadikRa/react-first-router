import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <nav className='navr'> 
            <Link to="/">home</Link>
            <Link to="/">first</Link>
            <Link to="/about">About</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;