import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Nav = () => (
  <div className="header" style={{paddingTop:"50px"}}>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link text-white" style={{fontSize:"18px", fontWeight:700}} href="http://bit.ly/WaweruResume" target="_blank">RESUME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" style={{fontSize:"18px", fontWeight:700}} href="#portfolio">PORTFOLIO</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" style={{fontSize:"18px", fontWeight:700}} href="#about">ABOUT</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled text-white" style={{fontSize:"18px", fontWeight:700}} href="#contacts">CONTACTS</a>
  </li>
</ul></div>
    
)

export default Nav;