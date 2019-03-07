import React, { Component } from 'react';
import './Connect.css';
import github from '../images/github-logo.svg';
import linkedin from '../images/linkedin-logo.svg'; 

class Connect extends Component {

  copyToClipboard = (e) => {
    this.input.select();
    document.execCommand('copy');
    e.target.focus();
    alert('samtsmiley@gmail.com coppied to clipboard');
  };
  
  render() {
    var connectVisibility = 'hide';
 
    if (this.props.connectVisibility) {
      connectVisibility = 'show';
    }
    return (
      <section id='connect' className={connectVisibility}>
        <h2 className='connectTitle'>Connect</h2>
        <p>Feel free to email me:</p>
        <input
          onClick={this.copyToClipboard}
          readOnly
          ref={(input) => this.input = input}
          value='samtsmiley@gmail.com'
        />
        <p>And checkout out my social accounts:</p>
        <div className='socialMediaIcons'>
          <a href='https://www.linkedin.com/in/sam-smiley-374935aa/' rel='noopener noreferrer' target='_blank'>
            <img src={github} alt='Linkedin Logo' className='socialMediaIcon'/>
          </a>
          <a href='https://github.com/samtsmiley' rel='noopener noreferrer' target='_blank'>
            <img src={linkedin} alt='Github Logo' className='socialMediaIcon'/>
          </a> 
        </div>
      </section>
    );
  }
}

export default Connect;