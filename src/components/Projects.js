import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookmark,
  faMobileAlt,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => (
  <section
    id="portfolio"
    className="container-fluid text-justify"
    style={{
      backgroundColor: "#07aaf5",
      color: "#fff",
      paddingTop: "89px",
      position: "relative"
    }}
  >
    <section className="container">
      <div className="row, text-center" style={{ marginBottom: "40px" }}>
        <div className="overlay" />
        <div className="col-sm-12">
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "2px"
            }}
            className="text-capitalize"
          >
            <FontAwesomeIcon
              style={{ marginRight: "13px" }}
              size={"1x"}
              icon={faBookmark}
            />
            Portfolio
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-xs-6">
          <a
            href="https://drive.google.com/file/d/1j7Fl2f6-sW3GrpQJ2CCDf7sXBR4TszC2/view"
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
          >
            <div className="block">
              <FontAwesomeIcon
                style={{ fontSize: "44px", fontWeight: "100" }}
                size={"3x"}
                icon={faCode}
              />
              <h4
                style={{ fontSize: "18px", fontWeight: "600" }}
                className="text-uppercase"
              >
                Fleet Management App | Mobile App
              </h4>
              <p>
                An Android app for truck drivers to help them and the fleet
                owners manage tasks and expenses. The app features integrations
                to Google Maps API, Camera, Gallery, File Manager and Background
                Services. <br /> React Native | JavaScript | Java
              </p>
            </div>
          </a>
        </div>
        <div className="col-sm-4 col-xs-6">
          <a
            href="https://drive.google.com/file/d/1el_zXCqzT6hwPKP1uN9HxFksT48rY4q_/view"
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
          >
            <div className="block">
              <FontAwesomeIcon size={"3x"} icon={faMobileAlt} />
              <h4
                style={{ fontSize: "18px", fontWeight: "600" }}
                className="text-uppercase"
              >
                MathWizza | Mobile App
              </h4>
              <p>
                An android app and later will also bring it to iOS. It's main
                function is to help kids learn maths and compete with friends in
                a fun and interactive way. <br />
                React Native | NodeJS | GraphQL | MongoDB
              </p>
            </div>
          </a>
        </div>
        <div className="col-sm-4 col-xs-6">
          <a
            href="https://github.com/KamauIan/NewsApp"
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
          >
            <div className="block">
              <FontAwesomeIcon size={"3x"} icon={faNewspaper} />
              <h4
                style={{ fontSize: "18px", fontWeight: "600" }}
                className="text-uppercase"
              >
                News App | Mobile App
              </h4>
              <p>
                A News mobile application that uses news.org API to to fetch
                data and render it on to the application. <br /> React-Native |
                REST API{" "}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <div className="row">
      <div
        style={{
          backgroundColor: "rgb(6, 146, 210)",
          backgroundClip:
            "initial, initial, initial, initial, initial, initial, initial",
          backgroundPositionX: "0px, 0px, 40px, 40px, 0px, 40px",
          backgroundPositionY: "0px, 0px, 70px, 70px, 0px, 70px",
          width: "100%",
          height: "140px",
          backgroundSize: "80px 140px",
          opacity: ".5",
          backgroundImage:
            "linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(30deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(150deg, rgb(7, 170, 245) 12%, transparent 12.5%, transparent 87%, rgb(7, 170, 245) 87.5%, rgb(7, 170, 245) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px), linear-gradient(60deg, rgb(39, 183, 249) 25%, transparent 25.5%, transparent 75%, rgb(39, 183, 249) 75%, rgb(39, 183, 249) 0px)"
        }}
      />
    </div>
  </section>
);
export default Projects;
