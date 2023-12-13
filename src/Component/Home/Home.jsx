import React from "react";
import img0 from "../../images/f.webp";
import img from "../../images/f1.webp";
import img1 from "../../images/f3.jpg";
import "./Home.css";
import { Row, Col, Carousel } from "react-bootstrap";

import Section_A from "../Section/Section A/Section_A";
import Section_B from "../Section/Section B/Section_B";
import Section_C from "../Section/section C/Section_C";


const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container-fluid set">
          <Row>
            <Col>
            <div className="slider-container">
              <Carousel fade className="mt-3">
                <Carousel.Item interval={5000}>
                  <img src={img0} alt="im" className="img-fluid" />
                  <Carousel.Caption>
                    {/* <h3>Stone Collection</h3>
                    <p className="para">The Most Unique Gemstone Collection </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img src={img1} alt="im" className="img-fluid" />
                  <Carousel.Caption>
                    {/* <h3>Second Images</h3>
                    <p className="para">this is our slide Second image</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img src={img} alt="im" className="img-fluid" />
                  <Carousel.Caption>
                    {/* <h3>Third Images</h3>
                    <p className="para">this is our slide Third image</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </div>
            </Col>
          </Row>
        </div>
         <Section_A />
        <Section_B />
        <Section_C />
      
      </section>
    </div>
  );
};

export default Home;
