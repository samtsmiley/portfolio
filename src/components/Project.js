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
            <h3>
              {title}
            </h3> 
            <p>{desc}</p>
            <p classname='strong'>My Part:</p>
            <p>{me}</p>
            <p classname='strong'>Coloaborators:</p>
            <p>{colab}</p>
            <p classname='strong'>Tech:</p>
            <p>{tech}</p>
          </div>
      </div>
     </div>
    )
}
