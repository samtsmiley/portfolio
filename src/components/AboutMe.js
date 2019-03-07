import React, { Component } from 'react';
import './AboutMe.css';
import Footer from './Footer';
// import Footer from './Footer';

class AboutMe extends Component {

    
  render() {
    var aboutMeVisibility = "hide";
 
    if (this.props.aboutMeVisibility) {
      aboutMeVisibility = "show";
    }
    return (
      <div>
        <section id='aboutMe' className={aboutMeVisibility}>
          <div className='aboutMe'>
            <p className="intro">Hi, I'm Sam Smiley.</p>
            <p>I love building anything!</p> 
            <div className='skills'>
              <h2>Skills</h2>
              <div className="skillsRow">
                <div className="skillsColumnA">
                  <h3>Front-End</h3>
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Enzyme</p>
                  <p>jQuery</p>
                  <p>HTML5</p>
                  <p>CSS3</p>
                </div>
                <div className="skillsColumnB">
                  <h3>Back-End</h3>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                  <p>Mocha & Chai</p>
                  <p>Passport</p>
                  <p>SQL</p>
                  <p>REST APIs 3</p>
                </div>
                <div className="skillsColumnA">
                  <h3>Dev Tools</h3>
                  <p>Git</p>
                  <p>GitHub</p>
                  <p>NPM</p>
                  <p>Travis Cl</p>
                  <p>MongoDB Atlas</p>
                  <p>Postman</p>
                </div>
              </div>
            </div>
            <div className="about"> 
              <h3>Past</h3>
              <p>
                Growing up in South Carolina I studied to persue a carrer in engineering. After attending Virginia 
                Tech for a few semesters I became restless. As John Muir said "The Mountains are calling and I must go."
                I dropped out and moved to a little ski town in Colorado, Steamboat Springs. There, 
                my love for the outdoors was satisfied and I found a job that complimented my aptitudes. 
                I became a Ski Lift Mechanic. After a great run living in the mountains my wife and I 
                moved to Portland, OR to experience the city life. After Working a few different manufacuring 
                jobs I needed something more challangeing, it was time for a carrer change.
              </p>
              <h3>Present</h3>
              <p>
                I enrolled in Thinkful's Engineering Immersion to become a software developer. I gained the 
                skills to do what I love, Build and Maintain. Only this time the tools and materials are 
                programing languages and numbers instead of wrences and steel. All it takes is time, logic, 
                and creativity, the possibilites are endless.
              </p>
              <h3>Future</h3>
              <p>
                Working with you, building dynamic websites and apps!
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default AboutMe;
