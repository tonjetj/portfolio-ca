import React, { useState } from 'react';
import './contact.css';
import { Twemoji } from 'react-emoji-render';
import Confetti from 'react-dom-confetti';
import { HiOutlineMail } from 'react-icons/hi';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Contact = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:tontotjen@gmail.com';
  };

  const confettiConfig = {
    angle: 45,
    spread: 85,
    startVelocity: 30,
    elementCount: 100,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 1,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const handleConfettiButtonClick = () => {
    setConfettiActive((prevActive) => !prevActive); 
  };
  return (
    <section id='contact'>
      <div className="container contact__container">
          <h1>
            Get in touch
            <Twemoji
              text="🎉"
              alt="Confetti Emoji"
              className="emoji confetti-wrapper"
              onClick={handleConfettiButtonClick}
            />
            <Confetti active={confettiActive} config={confettiConfig} className='confetti'/>
          </h1>
          <div className="contact__options">
          <p className='subheader'>If you have a question or just want to say hi, I'll try my best to get back to you.</p>
          <p className='contact__copy'>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
          <div className="button__container">
          <button className='btn btn-primary' onClick={handleEmailButtonClick}> <HiOutlineMail className='icon'/> Mail me</button>
          <button className='btn btn-primary github'><a href='https://github.com/tonjetj'><BsGithub className='icon'/> GitHub</a></button>
          <button className='btn btn-primary'><a href='https://www.linkedin.com/in/tonje-totland-jenssen-1b6209a4/'><BsLinkedin className='icon'/> LinkedIn</a></button>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
