import React from 'react';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBuilding, faGraduationCap, faClock, faBook } from '@fortawesome/free-solid-svg-icons'

const Aboutme = () =>(
<section id="aboutme" className="container" style={{marginTop:"60px"}}>
<div className="row nav nav-pills">
  <div>
    <div className="row">
      <div className="col-md-5 col-sm-4 col-xs-12">
        <h3 style={{color:"#f5a623"}}><FontAwesomeIcon icon={faUser} style={{marginRight:"14px"}}></FontAwesomeIcon>About me</h3>
        <div className="text-justify" style={{fontSize:"18px", fontWeight:"300", color:"#555"}}>
          <p>
          From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into software development. I've always been hungry to continually learn more and improve my skills in creating high-quality software ever since.</p>
          <p>
          Below you'll find some projects that I've completed that showcase my skills and general background in developing software. More projects are available in my github account
          </p>                  
        </div>
      </div>
      <div className="col-md-3 col-sm-4 col-xs-6">
        <h3 style={{color:"#f5a623"}}><FontAwesomeIcon icon={faBuilding} style={{marginRight:"14px"}}></FontAwesomeIcon>Work history</h3>
        <div style={{marginTop:"26px", marginBottom: "26px"}}>
          <h4 style={{fontWeight:"700", fontSize:"18px", color:"#555"}}>Full-Stack Developer</h4>
          <ul style={{listStyleType:"none", margin:"0px", padding:"0px"}}>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>Wingubox</li>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Aug 2017-Present</li>
          </ul>
        </div> 
        <div style={{marginTop:"26px", marginBottom: "26px"}}>
          <h4 style={{fontWeight:"700", fontSize:"18px", color:"#555"}}>Software Developer Intern </h4>
          <ul style={{listStyleType:"none", margin:"0px", padding:"0px"}}>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Wingubox</li>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>Jan 2017 - April 2017 </li>
          </ul>
        </div> 
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <h3 style={{color:"#f5a623"}}><FontAwesomeIcon icon={faGraduationCap} style={{marginRight:"14px"}}></FontAwesomeIcon>Education</h3>
        <div style={{marginTop:"26px", marginBottom: "26px"}}>
          <h4 style={{fontWeight:"700", fontSize:"18px", color:"#555"}}>Bachelors Degree Computer Science</h4>
          <ul style={{listStyleType:"none", margin:"0px", padding:"0px"}}>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Chuka University</li>
            <li style={{color:"#9b9b9b", fontSize:"14px"}}><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 2013 - 2017</li>
          </ul>
        </div> 
      </div>
      
    </div>
  </div>
</div>
</section>)

export default Aboutme;

