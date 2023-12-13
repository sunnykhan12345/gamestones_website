import React from "react";
import "./Section_C.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../../images/app3.png";
import google from "../../../images/google1.png";
import stoneapp from "../../../images/stone app.jpg";
const Section_C = () => {
  return (
    <>
      <div className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download Mobile Apps</h4>
              <h2>save best option</h2>
              <p>
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
              <Link to="/">
                <img src={app} alt="ios" className="img-fluid me-3" />
              </Link>
              <Link to="/">
                <img src={google} alt="google" className="img-fluid" />
              </Link>
            </Col>

            <Col lg={6}>
              <img src={stoneapp} alt="shop" className="img-fluid" />
              {/* <video width="500px" height="500px"> */}
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qljJ35-0NFk?si=aCWGDUSr1-V9lamJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </video> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section_C;
