import React, { Component } from 'react';
import './Homepage.css';
import Nav from './Nav';
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Connect from './Connect'
import SmileyButton from './SmileyButton'
import Footer from './Footer';
import Intro from './Intro';

class Homepage extends Component {

  constructor(props){
    super(props)
    this.connect = React.createRef();
    this.aboutMe = React.createRef();
    this.portfolio = React.createRef();
    this.scrollToConnect = this.scrollToConnect.bind(this);
    this.scrollToAboutMe = this.scrollToAboutMe.bind(this);
    this.scrollToPortfolio = this.scrollToPortfolio.bind(this);
    this.state={visible: false};
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.offMenuMouseDown = this.offMenuMouseDown.bind(this);
  }
 
  scrollToConnect() {
    this.connect.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  
  scrollToAboutMe() {
    this.aboutMe.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollToPortfolio(){
    this.portfolio.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({visible: !this.state.visible});
  }
  
  offMenuMouseDown() {
    if (this.state.visible) this.setState({visible: false}); 
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
          handleAboutMeMouseDown={this.scrollToAboutMe}
          handlePortfolioMouseDown={this.scrollToPortfolio}
          handleConnectMouseDown={this.scrollToConnect}
          />
        <Intro />  
        <AboutMe ref={this.aboutMe}/>
        <div className='break'/>
        <Portfolio  ref={this.portfolio}/>
        <div className='break'/>
        <Connect ref={this.connect} />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
