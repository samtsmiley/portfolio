import React from 'react';
import './AboutMe.css';
import redux from '../images/redux.png' 
import enzyme from '../images/enzyme.png' 
import npm from '../images/npmlogo.png' 
import postman from '../images/postman.png' 
import rest from '../images/rest.png' 

const AboutMe = React.forwardRef((props, ref)=>{

  return (
    <section className='content' ref={ref} id='aboutMe'>
      <div className='me'>
        <span className='outdoor'>Outdoor Enthusiast</span> 
        <span className='WD'>
          <span className='web'>Web</span>
          <span className='dev'> Developer</span>
        </span>
      </div>
      <div className='aboutMe'>
        <p className="intro">Hi, I'm Sam Smiley.</p>
        <p>I love to build things!</p> 
        <div className='skills'>
          <h2>Skills</h2>
          <div className="skillsRow">
            <div className="skillsColumnA">
              <h3>Front-End</h3>
              <p><i className="devicon-javascript-plain colored"></i> JavaScript</p>
              <p><i className="devicon-react-original colored"></i> React</p>
              <p><img className='icon' src={redux} alt='redux png'/> Redux</p>
              <p><img className='icon' src={enzyme} alt='enzyme png'/> Enzyme</p>
              <p><i className="devicon-jquery-plain colored"></i> jQuery</p>
              <p><i className="devicon-react-original"></i> React Native</p>
              <p><i className="devicon-html5-plain colored"></i> HTML5</p>
              <p><i className="devicon-css3-plain colored"></i> CSS3</p>
            </div>
            <div className="skillsColumnB">
              <h3>Back-End</h3>
              <p><i className="devicon-nodejs-plain colored"></i> Node.js</p>
              <p><i className="devicon-mongodb-plain colored"></i> MongoDB</p>
              <p><i className="devicon-mocha-plain colored"></i> Mocha/Chai</p>
              <p><i className="devicon-express-original colored"></i> Express</p>
              <p><i className="devicon-postgresql-plain colored"></i> PostgreSQL</p>
              <p><img className='icon' src={rest} alt='rest png'/> REST APIs 3</p>
            </div>
            <div className="skillsColumnA">
              <h3>Dev Tools</h3>
              <p><i className="devicon-git-plain colored"></i> Git</p>
              <p><i className="devicon-github-plain colored"></i> GitHub</p>
              <p><img className='icon' src={npm} alt='npm png'/> NPM</p>
              <p><i className="devicon-travis-plain colored"></i> Travis CI</p>
              <p><i className="devicon-mongodb-plain"></i> MongoDB Atlas</p>
              <p><img className='icon' src={postman} alt='postman png'/> Postman</p>
              <p><i class="devicon-heroku-original colored"></i> Heroku</p>
            </div>
          </div>
        </div>
        <div className="about"> 
          <h3>Past</h3>
          <p>
            Growing up in South Carolina I studied to pursue a career in engineering. After attending Virginia 
            Tech for a few semesters I became restless, and as John Muir said, "The Mountains are calling and I must go."
            I left Virginia and moved to a little ski town called Steamboat Springs, Colorado. There, 
            my love for the outdoors was satisfied and I found a job that complimented my aptitudes. 
            I became a Ski Lift Mechanic. After a great run living in the mountains, my wife and I 
            moved to Portland, OR to experience the city life. Working a few different manufacturing 
            jobs I needed something more challenging, it was time for a career change.
          </p>
          <h3>Present</h3>
          <p>
            I enrolled in Thinkful's Engineering Immersion to become a software developer. I gained the 
            skills to do what I love, Build and Maintain. Only this time the tools and materials are 
            programming languages and numbers instead of wrenches and steel. All it takes is time, logic, 
            and creativity, the possibilities are endless.
          </p>
          <h3>Future</h3>
          <p>
            Working with you and your team! Building dynamic websites and apps!
          </p>
        </div>
      </div>
    </section>
    );
  }
);

export default AboutMe;
