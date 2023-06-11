import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/tonje-totland-jenssen-1b6209a4/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/tonjetj' target='_blank' rel='noreferrer'><BsGithub/></a>
        <p className='email'>tontotjen@gmail.com</p>
    </div>
  )
}

export default Socials;