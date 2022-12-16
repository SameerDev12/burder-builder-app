import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className='o-header'>
        <img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt="Logo" />
        <nav className='n-navbar-menu'>
            <ul className='n-navbar-list'>
               <li className='n-navbar-link'>Burger Builder</li>
               <li className='n-navbar-link'>Login</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
