import React from "react";
import './Projects.css';
import Project from './Project'
import slpst from '../images/slpst.svg'
import game from '../images/game.svg'
import dothrakit from '../images/dothrakit.svg'

export class Projects extends React.Component {

  render() {
    const projectData = [
      {
        title: 'SLP Student Tracker',
        desc: 'SLP Student Tracker is an app made for Speech Language Pathologists to keep track of students by recording a SOAP note. With a history of notes a visual graph will show students progress',
        tech: 'React, Redux, Node, Express, Mocha/Chai, and Mongo',
        me: 'All of it. I am in the process of refactoring this app using React Hooks for state management.',
        colab: 'Just Me',
        displayLeft: true,
        image: slpst,
        link: 'https://slpst.herokuapp.com/',
        git: 'https://github.com/thinkful-ei26/sam-sst-client'
      },
      {
        title: 'DothraKit',
        desc: 'With the final season of GOT coming out it\'s time to brush up on your Dothraki phrases! DothraKIT uses a spaced repetition algorithm to ensure you are learning efficiently. The rules are simple: learn the word, get it right, you live. Or else...well, best not to get on Khal\'s bad side. You can log in with username: Sammy, password: 0123456789.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, Enzyme, and Mongo',
        me: 'With just one partner on this project we shared alot of the responsibilities',
        displayLeft: false,
        colab: 'Nikkie Mash',
        image: dothrakit,
        link: 'https://dothrakit.herokuapp.com/dashboard',
        git: 'https://github.com/thinkful-ei26/DothraKIT-Client-Nikkie-Sam'
      },
      {
        title: 'Game-A-Tron',
        desc: 'Game-A-Tron is a web application that helps people to gamify their lives. Players are able to create and play games. It was a collaborative project with four of us.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, Enzyme and Mongo',
        me: 'I brought the app concept to the table. I built many front-end components and modified the back end to get proper responces form fetch requests',
        displayLeft: true,
        colab: 'Sean Krummel, Randy Cole, Scott Murdisto',
        image: game,
        link: 'https://ei26.netlify.com/',
        git: 'https://github.com/open-sourcerers-ei26/client'
      }
    ]

    const projects = projectData.map((project, index) => {
      return <Project key={index} {...project} iScored={true}/>
    })
    
    var projectsVisibility = 'hide';
 
    if (this.props.projectsVisibility) {
      projectsVisibility = 'show';
    }
      
    return (
      <section  id='projects' className={projectsVisibility}>
        <h2 className='projectsTitle'>My Recent Projects</h2>
        {projects}
        <p className='clickSmiley'>Click the Smiley Face for more ;)</p>
      </section>
    );
  }
}

export default Projects;
