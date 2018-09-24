import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const Socials = () => (
  <div className="text-center" style={{marginBottom:"32px", marginTop:"10px", color:"#fff"}}>
    <a style={{color:"inherit", textDecoration:"none"}} href="http://bit.ly/WaweruKamau"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
    <a style={{color:"inherit", textDecoration:"none"}} href="http://bit.ly/MyGithub"><FontAwesomeIcon icon={faGithub} size="2x" style={{marginLeft:"25px"}}/></a>
    <a style={{color:"inherit", textDecoration:"none"}} href="http://bit.ly/wawerustack"><FontAwesomeIcon icon={faStackOverflow} size="2x" style={{marginLeft:"25px"}}/></a> 
    <a style={{color:"inherit", textDecoration:"none"}} href="mailto:wawerumail@gmail.com?Subject=Hello"> <FontAwesomeIcon icon={faEnvelope} size="2x" style={{marginLeft:"25px"}}/> </a> 
    <a style={{color:"inherit", textDecoration:"none"}} href="http://bit.ly/twitterwaweru"><FontAwesomeIcon icon={faTwitter} size="2x" style={{marginLeft:"25px"}}/> </a>
  </div>
)

export default Socials;
