import React, { useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Cards = ({ image, rating, title, paragraph, price }) => {
          useEffect(()=>{
              Aos.init({duration:3000})
          },[])
      
  return (
      
       <Col data-aos="zoom-in-right" sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden ">
          <Card.Img
            variant="top"
            src={image}
            alt="card-1-img"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{rating}</div>
            <div className="wishlist">
              <span>
                <AiOutlineHeart />
              </span>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text> {paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0 ">${price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/cart">
                <p>
                  <span className="icon"><BsFillBagHeartFill /></span>
                  <span className="ms-2">Add to Cart</span>
                </p>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
