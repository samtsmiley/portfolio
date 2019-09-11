import React from 'react'
import './Project.css';
import redux from '../images/redux.png' 
import enzyme from '../images/enzyme.png' 
import rest from '../images/rest.png' 

export default ({title, desc, tech, displayLeft, image, me, colab, git, link, id }) => {
  const whichImgdisplay = displayLeft
    ? 'projectImgLeft'
    : 'projectImgRight'
  
    const whichProjectDisplay = displayLeft
    ? 'projectAboutRight'
    : 'projectAboutLeft'

    return (
      <div >
        <div className='project' key={id}>
          <a href={link} rel='noopener noreferrer' target='_blank'>
            <img className={whichImgdisplay}  src={image} alt=''/>    
          </a>
          <div className={whichProjectDisplay} >
            <p className='projectTitle strong'>
              <a href={link} rel='noopener noreferrer' target='_blank' className='noUnderline'>
                {title}
              </a>
              <a href={git} rel='noopener noreferrer' target='_blank' className='projectGitHubLink'>
                <i className="devicon-github-plain colored projectTitle"></i> 
              </a>
            </p> 
            <p className='projectDesc'>{desc}</p>
            <p className='strong'>My Part:</p>
            <p>{me}</p>
            <p className='strong'>Collaborrrrrrators:</p>
            <p>{colab}</p>
            <p className='strong'>Tech: 
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <img className='icon' src={redux} alt='redux png'/>
            <img className='icon' src={enzyme} alt='enzyme png'/>
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-mongodb-plain colored"></i>
            <i className="devicon-mocha-plain colored"></i>
            <i className="devicon-express-original colored"></i>
            <img className='icon' src={rest} alt='rest png'/>
            </p>
            {/* <p>{tech}</p> */}
          </div>
      </div>
     </div>
    )
}
