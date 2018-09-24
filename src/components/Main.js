import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav'
import Socials from './Socials';
import Projects from './Projects';
import Contacts from './Contacts';
import Aboutme from './Aboutme';
import Header from './Header';
import Hireme from './Hireme';

const Main = () => (
  <div>
    <header style={{ backgroundColor: "#07aaf5" }}>
      <Nav />

      <div>
        <div className="col">
          <Header />
          <Socials />
          <div className="row">
            <div className="overlay" style={{ backgroundColor: "rgb(6, 146, 210)", backgroundClip: "initial, initial, initial, initial, initial, initial, initial", backgroundPositionX: "0px, 0px, 40px, 40px, 0px, 40px", backgroundPositionY: "0px, 0px, 70px, 70px, 0px, 70px", width: "100%", height: "140px", bottom: "0", backgroundSize: "80px 140px", opacity: ".5", backgroundImage: "linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px)" }}></div>
          </div>
          
        </div>
      </div>
    </header>
    <Aboutme />
    <Projects />
    <Hireme />
    <Contacts />

  </div>
)
export default Main;


