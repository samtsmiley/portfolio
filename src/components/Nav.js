import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="menuSlider"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2 className='menuItems'>
          <span className='menuItem' onTouchStart={() => this.props.handleAboutMeMouseDown()} onMouseDown={() => this.props.handleAboutMeMouseDown()}>About Me</span>
          <span className='menuItem' onTouchStart={() => this.props.handlePortfolioMouseDown()} onMouseDown={() => this.props.handlePortfolioMouseDown()}>Portfolio</span>
          <span className='menuItem' onTouchStart={() => this.props.handleConnectMouseDown()} onMouseDown={() => this.props.handleConnectMouseDown()}>Connect</span>
        </h2>
      </div>
    );
  }
}

  export default Nav;