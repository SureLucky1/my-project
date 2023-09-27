import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  faTwitter, faFacebook, faLinkedin, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";
const FooterV2 = () => {

  return (
    <footer className="one container-fluid">
      <div className="inner">
        <div className="item">
    <div>
      <h6>Categories</h6>
      <h4>Graphics & Design</h4>
      <h4>Digital Marketing</h4>
      <h4>Writing & Translation</h4>
      <h4>Video & Animation</h4>
      <h4>Programming & Tech</h4>
      <h4>Data</h4>
      <h4>Business</h4>
      <h4>Lifestyle</h4>
      <h4>Photography</h4>
      <h4>Sitemap</h4>
    </div>
    <div>
      <h6>About</h6>
      <h4>Careers</h4>
      <h4>Press & News</h4>
      <h4>Partnerships</h4>
      <h4>Privacy Policy</h4>
      <h4>Terms of Service</h4>
      <h4>Intellectual Property Claims</h4>
      <h4>Investor Relations</h4>
      <h4>Contact Sales</h4>
    </div>
    <div>
      <h6>Support</h6>
      <h4>Help & Support</h4>
      <h4>Trust & Safety</h4>
      <h4>Selling on Fiverr</h4>
      <h4>Buying on Fiverr</h4>
    </div>
    <div>
      <h6>Community</h6>
      <h4>Customer Success Stories</h4>
      <h4>Community Hub</h4>
      <h4>Forum</h4>
      <h4>Events</h4>
      <h4>Blog</h4>
      <h4>Influencers</h4>
      <h4>Affiliates</h4>
      <h4>Podcast</h4>
      <h4>Invite a Friend</h4>
      <h4>Become a Seller</h4>
      <h4>Community Standards</h4>
    </div>
    <div>
      <h6>More From Fiverr</h6>
      <h4>Fiverr Business</h4>
      <h4>Fiverr Pro</h4>
      <h4>Fiverr Logo Maker</h4>
      <h4>Fiverr Guides</h4>
      <h4>Get Inspired</h4>
      <h4>Fiverr Select</h4>
      <h4>ClearVoice
    Content Marketing</h4>
      <h4>Fiverr Workspace
    Invoice Software</h4>
      <h4>Learn
    Online Courses</h4>
      <h4>Working Not Working</h4>
    </div>
      </div>
          <div className="footer">
      
          <div className="title">
          <h5><img src="./img/fiverr.png" /><span style={{color: "rgb(189, 189, 189)"}}>.</span></h5>
          <h6>© Fiverr International Ltd. 2023</h6>
          </div>
          
        <div className="footerInner">
          <div className="Icon">
          <FontAwesomeIcon icon={faTwitter} className="iconItem" />
          <FontAwesomeIcon icon={faFacebook} className="iconItem" />
          <FontAwesomeIcon icon={faLinkedin} className="iconItem" />
          <FontAwesomeIcon icon={faPinterest} className="iconItem" />
          <FontAwesomeIcon icon={faInstagram} className="iconItem" />
          </div>
          <div className="other">
          <FontAwesomeIcon icon={faGlobe} fontSize="20px"/><h5>English</h5>
          <h5 style={{marginLeft: "30px"}}>NT$ TWD</h5>
          </div>
        </div>
      </div>
      </div>
      <div className="containerr">
        <div className="Footer">
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categories</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3" className="footItem">Graphics & Design</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="footItem">
                      Digital Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Writing & Translation
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Video & Animation
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Programming & Tech
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Data
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Business
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Lifestyle
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Photography
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Sitemap
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3" className="footItem">Careers</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="footItem">
                      Press & News
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Partnerships
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Privacy Policy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Terms of Service
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Intellectual Property Claims
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Investor Relations
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Contact Sales
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Support</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3" className="footItem">Help & Support</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="footItem">
                      Trust & Safety
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Selling on Fiverr
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Buying on Fiverr
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Community</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3" className="footItem">Customer Success Stories</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="footItem">
                      Community Hub
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Forum
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Events
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Blog
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Influencers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Affiliates
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Podcast
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Invite a Friend
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Become a Seller
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Community Standards
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>More From Fiverr</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3" className="footItem">Fiverr Business</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="footItem">
                      Fiverr Pro
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Fiverr Logo Maker
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Fiverr Guides
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Get Inspired
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Fiverr Select
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      ClearVoice Content Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Fiverr Workspace Invoice Software
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Learn Online Courses
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="footItem">
                      Working Not Working
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className="footer">
      <div className="title">
      <h5><b>fiverr<span style={{color: "rgb(189, 189, 189)"}}>.</span></b></h5>
      <h6>© Fiverr International Ltd. 2023</h6>
      </div>
    <div className="footerInner">
      <div className="Icon">
      <FontAwesomeIcon icon={faTwitter} className="iconItem" />
      <FontAwesomeIcon icon={faFacebook} className="iconItem" />
      <FontAwesomeIcon icon={faLinkedin} className="iconItem" />
      <FontAwesomeIcon icon={faPinterest} className="iconItem" />
      <FontAwesomeIcon icon={faInstagram} className="iconItem" />
      </div>
      <div className="Other">
      <FontAwesomeIcon icon={faGlobe} className="earthIcon"/><h5>English</h5>
      <h5 style={{marginLeft: "30px"}}>NT$ TWD</h5>
      </div>
    </div>
  </div>
  </div>
    </footer>
  )
}

export default FooterV2