import React from 'react';
import './header.css';
import CTA from './CTA';
import Socials from './Socials';
import me from '../../assets/me.png';


const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
      <div className='me'>
          <img src={me} alt="me"/>
        </div>
        <div className="header__heroText">
         <h1>Welcome!</h1>
         <h2>I'm Tonje Totland Jenssen,</h2>
         <h2>a Frontend Developer.</h2> 
          <CTA/>
        </div>
        <Socials/>
      </div>
    </header>
  )
}

export default Header;