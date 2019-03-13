import React from 'react';
import './Connect.css';
import github from '../images/github-logo.svg';
import linkedin from '../images/linkedin-logo.svg'; 
import resume from '../images/samSmileyResume.pdf';
// import gmail from '../images/gmail.png';

const Connect = React.forwardRef((props, ref)=>{

    return (
    <section ref={ref} className='content' id='connect'>
        <h2 className='connectTitle'>Connect</h2>
        <p>Feel free to email me:</p>
          <a href='mailto:samtsmiley@gmail.com'>
          {/* <img className='icon' src={gmail} alt='npm png'/>  */}
           samtsmiley@gmail.com
          </a>
        <p>Here is my &nbsp;
          <a href={resume} target='blank' rel='noopener noreferrer'>
            Resume.
          </a>
        </p>
        <p>And checkout out my social accounts:</p>
        <div className='socialMediaIcons'>
          <a href='https://github.com/samtsmiley' rel='noopener noreferrer' target='_blank'>
            <img src={github} alt='Github Logo' className='socialMediaIcon'/>
          </a>
          <a href='https://www.linkedin.com/in/sam-smiley-374935aa/' rel='noopener noreferrer' target='_blank'>
            <img src={linkedin} alt='Linkedin Logo' className='socialMediaIcon'/>
          </a> 
        </div>
      </section>
    );
  }
);

export default Connect;