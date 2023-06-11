import './about.css';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <h2>About me</h2>
        <div className="about__content">
          <h3>I'm Tonje, a beginner programmer based in Norway.</h3>
          <span className='line'></span>
          <p>
            I'm a passionate beginner programmer with a love for <Twemoji text="📷" alt="Camera Emoji" className="emoji"/> photography, <Twemoji text="🎵" alt="Music Note Emoji" className="emoji"/> music, and <Twemoji text="🏔️" alt="Mountain Emoji" className="emoji"/> hiking. I enjoy building accessible, responsive, clean, and    inclusive websites/products and exploring new technologies to expand my skills.
          </p>
          <p>
            My journey with Frontend Development started back in August 2021. I have a big passion
            for <Twemoji text="🎨" alt="Art Palette Emoji" className="emoji"/> design and enjoy harnessing my creativity to develop and create things for the web.
          </p>
          <p>
          <Twemoji text="🔭" alt="Telescope Emoji" className="emoji"/> My main focus is building accessible, responsive, clean, and inclusive websites/products
            to deliver the best digital experience for all users.
          </p>
          <p>
            I am open to internships, part-time, and full-time junior positions in UX/UI and
            Frontend Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
