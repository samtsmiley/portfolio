import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {

    
  render() {
    return (
      <section className="aboutMe">

        <header className="subheader">
          <h2>About Me</h2>
        </header>
        <ul className="skills">
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Dev Tools</li>
        </ul>
        
        <p className="about">Hi, Im Sam Smiley, a Full-Stack Web Developer.</p>

        <p className="about">Apart from sleeping I probably spend about 90% of my time in the woods 
          or building/mainting something. Two things I love in My entire  drawn to how things work 
          and the outdoors. Growing up I studied to persue a carrer in engineering and went to Virginia Tech. 
          Although I was enjoying my engineering classes I became restless. As John Muir said "The Mountains are calling and I must go."
          I dropped out and moved to a little ski town in Colorado, Steamboat Springs. There, my love for the outdoors was satisfied and I found a job that 
          complimented my aptitudes. I became a Ski Lift Mechanic. After a great run living in the mountains my wife and I moved to Portland, OR to live the city life.
          Working a few different manufacuring jobs I needed something more challangeing, it was time for a carrer change.
        </p>
        <p className="about">I enrolled in Thinkful's Engineering Immersion to become a software developer. I gained the skills to do what I love, Build and Maintain.
          Only this time the tools and materials are programing languages and numbers instead of wrences and steel. . All it takes is time, logic, 
          and creativity, the possibilites are endless
        </p>

      </section>
    );
  }
}

export default AboutMe;
