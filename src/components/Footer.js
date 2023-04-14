import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md-6 style={{ paddingRight: "0px" }}>
            <div className="footer-left">
              <h2
                style={{ marginLeft: "1px", fontSize: "larger" }}
                className="font"
              >
                EDISONVALLEY
              </h2>
              <p style={{ fontSize: "smaller" }}>
                2020 © Edisonvalley. Design & Develop by Osperb
              </p>
              <p style={{ fontSize: "smaller" }}>
                We are a bunch of tech enthusiasts determined to<br></br>
                uplift the society utilising the latest technologies around us
              </p>
            </div>
          </Col>

          <Col md-6 style={{ paddingRight: "0px" }}>
            <div>
              <Row className="footer-right">
                <div className="footer-main">
                  <Col md-4>
                    <div>
                      <h3 className="group">Resources</h3>
                      <ul className="groupp">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md-4>
                    <div>
                      <h3 className="group">Company</h3>
                      <ul className="groupp">
                        <li>About Us</li>
                        <li>Features</li>
                      </ul>
                    </div>
                  </Col>
                </div>
                <Col md-4>
                  <div>
                    <h3 className="group">Social Links</h3>
                    <div className="foticon">
                      <a href="https://www.facebook.com" className="icon1">
                        <BsFacebook />
                      </a>
                      <a href="https://www.twitter.com" className="icon2">
                        <BsTwitter />
                      </a>
                      <a href="https://www.google.com" className="icon3">
                        <BsGoogle />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
