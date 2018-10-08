import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Nav = () => (
  <div className="header" style={{ paddingTop: "15px", paddingBottom:"5px", backgroundColor: "#07aaf5", position:"fixed", width:"100%", top:0, float:"left", zIndex:1 }}>
    <ul className="nav justify-content-center">
    <li className="nav-item">
        <a className="nav-link text-white" style={{ fontSize: "18px", fontWeight: 700 }} href="#home">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" style={{ fontSize: "18px", fontWeight: 700 }} href="#portfolio">PORTFOLIO</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" style={{ fontSize: "18px", fontWeight: 700 }} href="#about">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-white" style={{ fontSize: "18px", fontWeight: 700 }} href="#contacts">CONTACTS</a>
      </li>
      <li className="nav-item" style={{backgroundColor:"#fff", borderRadius:50}}>
        <a className="nav-link text-white" style={{ fontSize: "18px", fontWeight: 700 }} href="http://bit.ly/2NhEaoj" target="_blank"><span style={{color:"#07aaf5"}}>RESUME</span></a>
      </li>
    </ul></div>
)

export default Nav;