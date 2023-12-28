import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const [isVissiable, setisVissable] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windoeScroll =
      document.body.scrollTop || document.documentElement.scrollTo;

    windoeScroll > heightToHidden ? setisVissable(true) : setisVissable(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>peshawar forest bazar kpk</p>
                <p>pakistan</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p> Mon-Fri 9:00AM - 10:PM</p>
                <p>pakistan</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>peshawar forest bazar kpk</p>
                <p className="calling">03014499888</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>On Social Media </p>
                <ul className="social_media_icon list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <p>
                        <BsFacebook />
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>
                        <AiOutlineTwitter />
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>
                        <AiFillInstagram />
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p  src="https://www.youtube.com/watch?v=fsfFAe5fhpc">
                        <AiFillYoutube />
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        <section className=" container-fluid copy_right">
        <Row>
            <Col sm={12}>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      &copy; 2023 <span>Zeeshan Khan</span>. All Rights Reseroved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>
        </Container>
      </footer>

      {/* scrol top */}

      <div className="scroll_top" onClick={scrollTop}>
        <p>
          <AiOutlineArrowUp />
        </p>
      </div>
      {/* {
            isVissiable && (
                <div className='scroll_top' onClick={scrollTop}>
                <p><AiOutlineArrowUp /></p>
                 </div>
            ) */}
      {/* } */}
    </>
  );
};

export default Footer;





// import React  from "react";
// import { Route, Routes } from "react-router-dom";
// // import Header from "./Component/Header/Header";
// import Home from "./Component/Home/Home";
// import Login from "./components/Login/Login";
// import Layout from "./Component/layout/Layout";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           {/* Define other routes as needed */}
//         </Route>
//         <Route path="/login" element={<Login />} />
       
//       </Routes>
//     </div>
//   );
// };

// export default App;
