import React from 'react'
import './Project.css';


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
          <img className={whichImgdisplay}  src={image} alt=''/>
          <div className={whichProjectDisplay} >
            <a href={link} rel='noopener noreferrer' target='_blank'>
              <h3>
                {title}
              </h3>
            </a> 
            <p>{desc}</p>
            <p className='strong'>My Part:</p>
            <p className='indent'>{me}</p>
            <p className='strong'>Coloaborators:</p>
            <p className='indent'>{colab}</p>
            <p className='strong'>Tech:</p>
            <p className='indent'>{tech}</p>
            <a href={git} rel='noopener noreferrer' target='_blank'>
              <p>
                GitHub repo
              </p>
            </a> 
          </div>
      </div>
     </div>
    )
}
