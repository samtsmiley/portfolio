import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="slider"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2>
          <span href="#">About Me</span>
          <span href="#">Portfolio</span>
          <span href="#">Connect</span>
        </h2>
      </div>
    );
  }
}

  export default Nav;