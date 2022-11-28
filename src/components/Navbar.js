import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar(){
    return (
    <div className='navbar'>
        <div className='navbar-left'>
            <NavLink
            activeClassName='navbar__link--active'
            className='navbar__link'
            to='/about'
            >
                About
            </NavLink>
        </div>
        <div className='navbar-right'>
            <NavLink
            activeClassName='navbar__link--active'
            className='navbar__link'
            to='/portfolio'
            >
                Portfolio
            </NavLink>
            <NavLink
            activeClassName='navbar__link--active'
            className='navbar__link'
            to='/contact'
            >
                Contact
            </NavLink>
            <NavLink
            activeClassName='navbar__link--active'
            className='navbar__link'
            to='/resume'
            >
                Resume
            </NavLink>
        </div>
    </div>
    );
}

export default NavBar;
