import React, { Component } from 'react';
import './Project.css';

// class Project extends Component {

    
//   render() {
//     return (
//       <section className="project">

//         <header className="subheader">
//           <h2>Projects</h2>
//         </header>
        
       

//       </section>
//     );
//   }
// }

// export default Project;
const SingleProject = (props) => {
  return (
  <li className="gallery-images">
    <img
      src={props.project.img}
      onClick={props.openModal}
    />
  </li>
  );
  }