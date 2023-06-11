import React from 'react';
import './footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div>
      <footer>
        <HashLink smooth to="/#">
         &copy; Tonje Totland Jenssen
        </HashLink>
      </footer>
      </div>
  )
}

export default Footer;