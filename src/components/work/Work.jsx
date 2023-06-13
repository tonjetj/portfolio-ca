import React, { useState } from 'react';
import './work.css';
import holidaze from '../../assets/holidaze.gif';
import holidaze2 from '../../assets/holidaze2.jpg';
import findings1 from '../../assets/findings1.jpg';
import findings2 from '../../assets/findings2.gif';
import eshop1 from '../../assets/eshop1.jpg';

const Work = () => {
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

const handleExpand1 = () => {
  setExpanded1(!expanded1);
  setExpanded2(expanded1);
  setExpanded3(false);
};

const handleExpand2 = () => {
  setExpanded2(!expanded2);
  setExpanded1(false);
  setExpanded3(expanded2);
};

const handleExpand3 = () => {
  setExpanded3(!expanded3);
  setExpanded1(expanded3);
  setExpanded2(false);
};

  return (
    <section id="work">
      <div className="container work__container">
        <h2>My Work</h2>
        <div className="items__container">

        <div className={`work__item ${expanded1 ? 'expanded' : ''}`} onClick={handleExpand1}>
          <div>
            <h3>Findings, Semester Project</h3>
            <div className="copy">
            <p>Findings is a website for an online NFT auction, where you can purchase and sell unique NFTs.</p>
            <p>The site is minimalistic with a dark yet vibrant color palette. </p>
            <p>Built with HTML, JavaScript, SASS and Bootstrap v5.2. The site is deployed on Netlify.</p>
            </div>
            <div className='btn__container'>
            <a
              href="https://github.com/tonjetj/2022-semester-project"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Project
            </a>
            <a href="https://findings.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
            </div>
          </div>
          <div className="work__itemImg">
            <img src={findings2} className='gif' alt="Gif showing the landing page to the Findings website" />
            <img src={findings1} className='desktop' alt='Landing page on Findings website'/>
          </div>
        </div>

        <div className={`work__item ${expanded2 ? 'expanded' : ''}`} onClick={handleExpand2}>
          <div>
            <h3>Eshop, JS Frameworks CA</h3>
            <div className="copy">
            <p>Eshop is an e-commerce website where you can shop a various of different products.</p>
            <p>The site has a clean and simple look where the products are the "heroes" throughout the website.</p>
            <p>The project is built with React.</p>
            </div>
            <div className="btn__container">
            <a
              href="https://github.com/tonjetj/js-frameworks-ca/tree/main/my-first-app"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Project
            </a>
            </div>
          </div>
          <div className="work__itemImg">
            <img src={eshop1} className='desktop' alt='Eshop landing page.'/>
          </div>
        </div>

        <div className={`work__item ${expanded3 ? 'expanded' : ''}`} onClick={handleExpand3}>
          <div>
            <h3>Holidaze, Project Exam</h3>
            <div className="copy">
            <p>Holidaze is an online booking application where you can book and rent out homes.</p>
            <p>The website has a toned and dark color palette styled in a modern and minimalistic way.</p>
            <p>Built with React, Styled Components and MUI components.</p>
            </div>
            <div className="btn__container">
            <a
              href="https://github.com/tonjetj/project-exam-2/tree/gh-pages"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Project
            </a>
            </div>
          </div>
          <div className="work__itemImg">
            <img src={holidaze} className='gif' alt="Gif showing Holidaze's landing page." />
            <img src={holidaze2} className='desktop' alt='Landing page for Holidaze.'/>
          </div>
        </div>
        

        </div>
      </div>
    </section>
  );
};

export default Work;
