import React, { Component } from "react";
import './SmileyButton.css';
import smiley from '../images/smiley.svg'
import superSmiley from '../images/superSmiley.svg'
 
class SmileyButton extends Component {
  constructor(props){
    super(props);
    this.state={
      menuImg:`${smiley}`,
    };
  }

  onMouseEnter() {
    this.setState({menuImg: `${superSmiley}`});
  }
  
  onMouseLeave() {
    this.setState({menuImg: `${smiley}`});
  }
  render() {
    return (
      <img  className='smileyButton' src={this.state.menuImg} height="100" 
        onMouseDown={this.props.handleMouseDown} 
        onMouseLeave={() => this.onMouseLeave()} 
        onMouseOver={()=>this.onMouseEnter()} alt='logo'/>
    );
  }
}
 
export default SmileyButton;