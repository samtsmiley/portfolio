import React, { Component } from 'react';
import './Homepage.css';
import Nav from './Nav';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Connect from './Connect'
import SmileyButton from './SmileyButton'


class Homepage extends Component {

  constructor(props){
    super(props);
    this.state={
      AboutMe:false,
      Projects: true,
      Connect:false,
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
   
  render() {
   
    return (
      <div className="homepage ">
        <SmileyButton handleMouseDown={this.handleMouseDown}/>
        <Nav handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        <div className="homepageHeader">
        <div className='homepageImage'/>

          <div className="headerContent">
            <h1 className='samHeader'>Sam Smiley</h1>
          </div>
          <div className='me'>
            <span className='outdoor'>Outdoor Enthusiast</span> 
            <span className='web'>Web Developer</span>
          </div>
        </div>
        {this.state.AboutMe && <AboutMe/>}
        {this.state.Projects && <Projects/>}
        {this.state.Connect && <Connect/>}


      </div>
    );
  }
}

export default Homepage;
