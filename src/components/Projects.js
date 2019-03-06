import React from "react";
import './Projects.css';
import Project from './Project'
import slpst from '../slpst.svg'
import game from '../game.svg'
import dothrakit from '../dothrakit.svg'




export class Projects extends React.Component {

  render() {
    const projectData = [
      {
        title: 'SLP Student Tracker',
        desc: 'SLP Student Tracker is an app made for Speech Language Pathologists to keep track of students progress by recording a SOAP note.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, and Mongo',
        me: '',
        colab: 'Just Me',
        displayLeft: true,
        image: slpst,
        link: 'https://dothrakit.herokuapp.com/',
        git: 'https://github.com/thinkful-ei26/DothraKIT-Client-Nikkie-Sam'
      },
      {
        title: 'DothraKit',
        desc: 'With the final season of GOT coming out it\'s time to brush up on your Dothraki phrases! DothraKIT uses a spaced repeitition algorithm to ensure you are learning efficiently. The rules are simple: learn the word, get it right, you live. Or else...well, best not to get on Khal\'s bad side.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, and Mongo',
        me: '',
        displayLeft: false,
        colab: 'Nikkie Mash',
        image: dothrakit,
        link: 'https://dothrakit.herokuapp.com/dashboard',
        git: 'https://github.com/thinkful-ei26/DothraKIT-Client-Nikkie-Sam'
      },
      {
        title: 'Game-A-Tron',
        desc: 'Game-A-Tron is a web application that helps people to gamify their lives.',
        tech: 'React, Redux, Node, Express, Mocha/Chai, and Mongo',
        me: '',
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
    
    var projectsVisibility = "hide";
 
    if (this.props.projectsVisibility) {
      projectsVisibility = "show";
    }
      
    return (
      <div  id='projects' className={projectsVisibility}>
        <h2 className='projectsTitle'>My Recent Projects</h2>
        {projects}
      </div>
    );
  }
}

export default Projects;
