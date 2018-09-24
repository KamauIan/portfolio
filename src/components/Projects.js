import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBookmark, faMobileAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Projects = () => (
  <section id="portfolio" className="container-fluid text-justify" style={{ backgroundColor: "#07aaf5", color: "#fff", paddingTop: "89px", position: "relative" }}>
    <section className="container">
      <div className="row, text-center" style={{ marginBottom: "40px" }}>
        <div className="overlay"></div>
        <div className="col-sm-12">
          <h3 style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "2px" }} className="text-capitalize"><FontAwesomeIcon style={{ marginRight: "13px" }} size={"1x"} icon={faBookmark}></FontAwesomeIcon>Portfolio</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-xs-6">
          <a href="http://bit.ly/Mach4Hire" style={{ color: "inherit", textDecoration: "none" }} >
            <div className="block">
              <FontAwesomeIcon style={{ fontSize: "44px", fontWeight: "100" }} size={"3x"} icon={faCode}></FontAwesomeIcon>
              <h4 style={{ fontSize: "18px", fontWeight: "600" }} className="text-uppercase">Machinery For Hire | Web App</h4>
              <p>
                A platform where machine owners can post their items and potential clients can hire from them. <br />Laravel | MySQL | HTML/CSS | JavaScript
                </p>
            </div>
          </a>
        </div>
        <div className="col-sm-4 col-xs-6">
          <a href="http://bit.ly/EventsAPP" style={{ color: "inherit", textDecoration: "none" }} >
            <div className="block">
              <FontAwesomeIcon size={"3x"} icon={faMobileAlt}></FontAwesomeIcon>
              <h4 style={{ fontSize: "18px", fontWeight: "600" }} className="text-uppercase">Events Sharing | Mobile App</h4>
              <p>A cross-platform Mobile application that users can create, share, view or search for events of interest. <br />C# (Xamarin) | XAML | MySQL/SQLite
                </p>
            </div>
          </a>
        </div>
        <div className="col-sm-4 col-xs-6">
        <a href="http://bit.ly/ReactNativeNews" style={{ color: "inherit", textDecoration: "none" }} >
          <div className="block">
            <FontAwesomeIcon size={"3x"} icon={faNewspaper}></FontAwesomeIcon>
            <h4 style={{ fontSize: "18px", fontWeight: "600" }} className="text-uppercase">News App | React-Native</h4>
            <p>
              A News mobile application that uses news.org API to to fetch data and render it on to the application. <br /> React-Native | REST API               </p>
          </div>
          </a>
        </div>
      </div>

    </section>
    <div className="row">
      <div style={{
        backgroundColor: "rgb(6, 146, 210)",
        backgroundClip: "initial, initial, initial, initial, initial, initial, initial",
        backgroundPositionX: "0px, 0px, 40px, 40px, 0px, 40px",
        backgroundPositionY: "0px, 0px, 70px, 70px, 0px, 70px",
        width: "100%",
        height: "140px",
        backgroundSize: "80px 140px",
        opacity: ".5",
        backgroundImage: "linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px)"
      }}>
      </div>
    </div>
  </section>
)
export default Projects;