import React from "react";
import './Portfolio.css';
import Project from './Project'
import slpst from '../images/slpst.svg'
import game from '../images/game.svg'
import dothrakit from '../images/dothrakit.svg'

const Portfolio = React.forwardRef((props, ref)=>{

    const projectData = [
      {
        title: 'Game-A-Tron',
        desc: 'Game-A-Tron is a web application that helps people to gamify their lives. Players can create and play games. It was a collaborative project with four of us. This app was built in 3 weeks.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, Enzyme and Mongo',
        me: 'I brought the app concept to the table. I built many front-end components and modified the back end to get proper responses from fetch requests.',
        displayLeft: true,
        colab: 'Sean Krummel, Randy Cole, Scott Murdisto',
        image: game,
        link: 'https://ei26.netlify.com/',
        git: 'https://github.com/open-sourcerers-ei26/client'
      }
     ,
      {
        title: 'DothraKit',
        desc: 'With the final season of GOT coming out it\'s time to brush up on your Dothraki phrases! DothraKIT uses a spaced repetition algorithm to ensure you are learning efficiently. The rules are simple: learn the word, get it right, you live. Or else...well, best not to get on Khal\'s bad side. You can log in with username: Sammy, password: 0123456789. This app was built in a week.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, Enzyme, and Mongo',
        me: 'With just one partner on this project, we shared many of the responsibilities.',
        displayLeft: false,
        colab: 'Nikkie Mashian',
        image: dothrakit,
        link: 'https://dothrakit.herokuapp.com/dashboard',
        git: 'https://github.com/thinkful-ei26/DothraKIT-Client-Nikkie-Sam'
      }, 
      {
        title: 'SLP Student Tracker',
        desc: 'SLP Student Tracker is an app made for Speech Language Pathologists to keep track of students by recording a SOAP note. With a history of notes, a visual graph will show students progress. This app was built in 2 weeks.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, and Mongo',
        me: 'All of it. I am in the process of refactoring this app using React Hooks for state management.',
        colab: 'Just Me',
        displayLeft: true,
        image: slpst,
        link: 'https://slpst.herokuapp.com/',
        git: 'https://github.com/thinkful-ei26/sam-sst-client'
      }
      
    ]

    const projects = projectData.map((project, index) => {
      return <Project key={index} {...project} iScored={true}/>
    })
    
    return (
      <section className='content' ref={ref} id='projects' >
        <h2 className='projectsTitle'>My Recent Projects</h2>
        {projects}
      </section>
    );
});

export default Portfolio;
