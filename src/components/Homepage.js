import React, { Component } from 'react';
import './Homepage.css';
import Nav from './Nav';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Connect from './Connect'
import SmileyButton from './SmileyButton'
import Footer from './Footer';



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
    this.offMenuMouseDown = this.offMenuMouseDown.bind(this);
    this.handleAboutMeMouseDown = this.handleAboutMeMouseDown.bind(this);
    this.handlePortfolioMouseDown = this.handlePortfolioMouseDown.bind(this);
    this.handleConnectMouseDown = this.handleConnectMouseDown.bind(this);

  }
  
  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({visible: !this.state.visible});
  }
  
  offMenuMouseDown() {
    if (this.state.visible) this.setState({visible: false}); 
  }

  handleAboutMeMouseDown(){
    this.setState({
      AboutMe: true,
      Projects: false,
      Connect: false,
    });
  }

  handlePortfolioMouseDown(){
    this.setState({
      AboutMe: false,
      Projects: true,
      Connect: false,
    });
  }

  handleConnectMouseDown(){
    this.setState({
      AboutMe: false,
      Projects: false,
      Connect: true,
    });
  }
  render() {
    return (
      <div className='homepage' onMouseDown={this.offMenuMouseDown}>
        <div className='smileyButt'>
          <SmileyButton 
            handleMouseDown={this.handleMouseDown}/>
        </div>
        <Nav 
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
          handleAboutMeMouseDown={this.handleAboutMeMouseDown}
          handlePortfolioMouseDown={this.handlePortfolioMouseDown}
          handleConnectMouseDown={this.handleConnectMouseDown}/>
        <div className='homepageImage'/>
          <div className="headerContent">
            <h1 className='samHeader'>Sam Smiley</h1>
          </div>
          <div className='me'>
            <span className='outdoor'>Outdoor Enthusiast</span> 
            <span className='WD'>
              <span className='web'>Web</span>
              <span className='dev'> Developer</span>
            </span>
          </div>
        {/* </div> */}
        <AboutMe aboutMeVisibility={this.state.AboutMe}/>
        <Projects projectsVisibility={this.state.Projects}/>
        {this.state.Connect && <Connect ConnectVisibility={this.state.Connect}/>}

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Homepage;
