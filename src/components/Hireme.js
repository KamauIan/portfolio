import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Hireme = () => (
  <section className="container" style={{marginTop:"90px", marginBottom:"90px"}}>
    <div className="row">
      <div className="col-sm-12 text-center">
        <h3 className="font-weight-bold" style={{fontSize:"24px", fontWeight:"700"}}>Need Any Help?</h3>
        <h4 className="font-weight-bold" style={{fontSize:"18px", lineHeight:"1.1", marginBottom:"40px"}}>
          <FontAwesomeIcon style={{marginRight:"5px"}} color={"#f5a623"} size={"2x"} icon={faThumbsUp}></FontAwesomeIcon>
          I am available for freelance hire
          </h4>
        <nav className="cl-effect-2">
          <a style={{backgroundColor:"tansparent", color:"#fff", lineHeight:"44px", fontSize:"14px"}}  href="#contact_me"><span style={{display:"inline-block" ,padding:"0px 14px", background:"#f5a623"}}>Hire Me</span></a>
        </nav>
      </div>
    </div>
  </section>
)
export default Hireme;

