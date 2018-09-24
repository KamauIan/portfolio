import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const Socials = () => (
  <div className="text-center" style={{marginBottom:"32px", marginTop:"10px", color:"#fff"}}>
    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
    <FontAwesomeIcon icon={faGithub} size="2x" style={{marginLeft:"25px"}}/>
    <FontAwesomeIcon icon={faStackOverflow} size="2x" style={{marginLeft:"25px"}}/>
    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{marginLeft:"25px"}}/>
    <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginLeft:"25px"}}/>
  </div>
)

export default Socials;
