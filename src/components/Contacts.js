import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contacts = () => (

  <section className="container-fluid" id="contacts" style={{background:"#07aaf5",color:"#fff", paddingTop: "90px" }}>
    <div className="row">
      <div className="col-sm-12 text-center text-capitalize">
        <h3 style={{fontSize:"24px", fontWeight:"700"}}>want to discuss a project?</h3>
        <h4 style={{fontSize:"18px", fontWeight:"700"}}>just drop a message below and i'll get in touch!</h4>
        <hr style={{width:"30px", height:"3px", background:"#fff", border:"0px", marginTop:"20px", marginBottom:"20px"}}/>
      </div>
    </div>
    <div className="row text-center" style={{fontSize:"14px"}}>
      <section className="col-sm-10 col-sm-offset-1" style={{marginLeft:" 8.33333%"}}>
        <div className="row text-center">
          <div className="col-sm-4 col-xs-12">
            <div className="block" style={{marginTop:"26px", marginBottom:"26px"}} >
              <FontAwesomeIcon size={"2x"}  icon={faEnvelope}></FontAwesomeIcon>
              <h4 className="text-uppercase" style={{fontSize:"18px", fontWeight:"700", marginTop:"10px"}}>Queries</h4>
              <ul style={{marginBottom:"10px", listStyle:"none", paddingLeft:"0"}}>
              <li>Email me at:</li>
                <li>wawerumail@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="block" style={{marginTop:"26px", marginBottom:"26px"}}>
              <FontAwesomeIcon size={"2x"} icon={faPhone}></FontAwesomeIcon>
              <h4 className="text-uppercase" style={{fontSize:"18px", fontWeight:"700", marginTop:"10px"}}>Call Me</h4>
              <ul style={{marginBottom:"10px", listStyle:"none", paddingLeft:"0"}}>
              <li>Call me maybe: </li>
                <li>(+254)729329231</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="block" style={{marginTop:"26px", marginBottom:"26px"}}>
              <FontAwesomeIcon size={"2x"} icon={faWhatsapp}></FontAwesomeIcon>
              <h4 className="text-uppercase" style={{fontSize:"18px", fontWeight:"700", marginTop:"10px"}}>Chat</h4>
              <ul style={{marginBottom:"10px", listStyle:"none", paddingLeft:"0"}}>
                <li>Lets chat about it:</li>
                <li>(+254)785155066</li>
              </ul>
            </div>
          </div>
        </div>
        <form action="" className="row" style={{marginTop:"30px", marginBottom:"30px"}}>
          <div className="col-sm-6 col-xs-12" >
            <div className="form-group">
              <label style={{float:"left", marginBottom:"5px"}} >Your Name</label>
              <input style={{ border:"0", borderBottom:"2px solid #fff", borderRadius:"0", boxShadow:"none", background:"0 0"}}type="text" className="form-control" id="your_name" placeholder="Write Your Name" />
            </div>
            <div className="form-group">
              <label style={{float:"left", marginBottom:"5px"}}>Your Email</label>
              <input style={{ border:"0", borderBottom:"2px solid #fff", borderRadius:"0", boxShadow:"none", background:"0 0"}} type="email" className="form-control" id="your_email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <label style={{float:"left"}}>Your Message</label>
              <textarea style={{height:"116px", border:"0", borderBottom:"2px solid #fff", borderRadius:"0", boxShadow:"none", background:"0 0"}} className="form-control" rows="5" placeholder="Write Your Message"></textarea>
            </div>
          </div>
          <div style={{marginTop:"55px", marginBottom:"55px"}} className="col-sm-12 text-center">
            <button style={{textTransform:"uppercase", fontWeight:"700", background:"#f5a623", padding:"15px 30px", color:"#fff"}} type="submit" className="btn">Send Message</button>
          </div>
        </form>
            <div className="col-sm-12">
              <p className="text-center" style={{ color:"#fff", position:"relative"}}>
               Copyright © {new Date().getFullYear()} Waweru Kamau
             </p>
           </div>
      </section>
    </div>
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
export default Contacts;