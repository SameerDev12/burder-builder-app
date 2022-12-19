import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
const [LinkColorChanger,setLinkColorChanger]=useState(true);
const Changer=()=>{
  setLinkColorChanger(!LinkColorChanger);
}


  return (
    <header className='o-header'>
        <div className='o-header-logo-container'>
          <img className='o-header-logo' src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt="Logo" />
        </div>
        <nav className='n-navbar-menu'>
            <ul className='n-navbar-list'>
               <li>
                 <Link onClick={Changer} className={`n-navbar-link ${LinkColorChanger&&"active-link"} link`} to={'/'}>Burger Builder</Link>
               </li>
               <li>
                <Link onClick={Changer} className={`n-navbar-link ${!LinkColorChanger&&"active-link"} link`} to={'/form'}>Login</Link>
               </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
