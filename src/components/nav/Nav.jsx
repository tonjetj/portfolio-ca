import React, { useState } from 'react';
import './nav.css';
import { GiSpellBook } from 'react-icons/gi';
import { RiChatSmile3Line, RiHome5Line } from 'react-icons/ri';
import { BsEmojiSmile } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/');

  return (
    <div className='container nav__container'>
      <h3>Tonje T. Jenssen</h3>
      <nav>
        <HashLink smooth to="/#" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active nav-link' : 'nav-link'} id='home'>
          <RiHome5Line alt='House Emoji'/>
          <p>Home</p>
        </HashLink>
        <HashLink smooth to="/#about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active nav-link' : 'nav-link'}>
          <BsEmojiSmile alt='Smile Emoji'/>
          <p>About Me</p>
        </HashLink>
        <HashLink smooth to="/#work" onClick={() => setActiveNav('/work')} className={activeNav === '/work' ? 'active nav-link' : 'nav-link'}>
          <GiSpellBook alt='Spellbook Emoji'/>
          <p>Work</p>
        </HashLink>
        <HashLink smooth to="/#contact" onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active nav-link' : 'nav-link'}>
          <RiChatSmile3Line alt='Chat Boble Emoji'/>
          <p>Contact</p>
        </HashLink>
      </nav>
    </div>
  );
};

export default Nav;
