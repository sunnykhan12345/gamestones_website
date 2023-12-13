import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css'
import "./Section_B.css";
import image1 from "../../../images/stone1.jpg";
import image2 from "../../../images/stone2.jpg";
import image3 from "../../../images/stone3.jpg";
import image4 from "../../../images/stone4.jpg";
import image5 from "../../../images/stone5.jpg";
import image6 from "../../../images/stone6.jpg";
import image7 from "../../../images/stone7.jpg";
import image8 from "../../../images/stone8.jpg";
// import stony from '../../../images/stone app.jpg';
import Cards from "../../Cards";

// mock data like api fetching dynamic data
const MockData = [
  {
    id: "0001",
    image: image1,
    title: "Pesawara stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 10,
    price: 99.5,
  },
  {
    id: "0002",
    image: image2,
    title: "lahore stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 53,
    price: 99.5,
  },
  {
    id: "0003",
    image: image3,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 22,
    price: 92.4,
  },
  {
    id: "0004",
    image: image4,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 36,
    price: 80.2,
  },
  {
    id: "0005",
    image: image5,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 9,
    price: 89.3,
  },
  {
    id: "0006",
    image: image6,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 48,
    price: 30.5,
  },
  {
    id: "0007",
    image: image7,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 78,
    price: 60.5,
  },
  {
    id: "0008",
    image: image8,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 60,
    price: 89.5,
  },
  {
    id: "0009",
    image: image1,
    title: "Pesawara stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 90,
    price: 99.5,
  },
  {
    id: "00010",
    image: image2,
    title: "lahore stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 96,
    price: 99.5,
  },
  {
    id: "00011",
    image: image3,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 84,
    price: 92.4,
  },
  {
    id: "00012",
    image: image4,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 98,
    price: 80.2,
  },
  {
    id: "00013",
    image: image5,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 66,
    price: 89.3,
  },
  {
    id: "00014",
    image: image6,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 75,
    price: 30.5,
  },
  {
    id: "00016",
    image: image7,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 29,
    price: 60.5,
  },
  {
    id: "00017",
    image: image8,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 40,
    price: 89.5,
  },
  {
    id: "00018",
    image: image1,
    title: "Pesawara stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 90,
    price: 99.5,
  },
  {
    id: "00019",
    image: image2,
    title: "lahore stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 96,
    price: 99.5,
  },
  {
    id: "00020",
    image: image3,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 84,
    price: 92.4,
  },
  {
    id: "00021",
    image: image4,
    title: "multan stone",
    paragraph:
   "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 98,
    price: 80.2,
  },
  {
    id: "00022",
    image: image5,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 66,
    price: 89.3,
  },
  {
    id: "00023",
    image: image6,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 75,
    price: 30.5,
  },
  {
    id: "00024",
    image: image7,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 29,
    price: 60.5,
  },
  {
    id: "00025",
    image: image8,
    title: "multan stone",
    paragraph:
      "the hard substance, formed of mineral matter, of which rocks consist.",
    rating: 40,
    price: 89.5,
  },
];

//   rating locial data
const Section_B = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
},[]);
  return (
    <>
      <section className="menu_stone">
        <Container>
          <Row>
            <Col   data-aos="fade-up"  lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR BEST CATAGERIES</h2>
              <p id="para">
                "Natural Stone" refers to a number of products quarried from the
                earth, used over many thousands of years as building.
              </p>
            </Col>
          </Row>
          <Row  >
            {MockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
              />
            ))}
          </Row>
        </Container>
      </section>

      {/* <img src={stony} alt=''/> */}
    </>
  );
};

export default Section_B;
