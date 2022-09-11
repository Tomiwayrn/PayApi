import React from 'react';
import logo from '../assets/shared/logo-light.svg';
import facebook from '../assets/shared/facebook.svg';
import twitter from '../assets/shared/twitter.svg';
import linkedin from '../assets/shared/linkedin.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt='logo'/>
        <ul>
            <li><Link to ='/pricing'>Pricing</Link></li>
            <li><Link to ='/about'>About</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
        </ul>

        <div className='icons'>
        <img src={facebook} alt='facebook'/>
        <img src={twitter} alt='twitter'/>
        <img src={linkedin} alt='linkedin'/>

        </div>
    </footer>
  )
}

export default Footer