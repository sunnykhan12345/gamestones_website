import React, { useEffect } from 'react'
import './Section_A.css'
import { Container,Row,Col } from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from "react-router-dom"
import stone1 from '../../../images/Agate.jpg'
import stone2 from '../../../images/Beryl.jpeg'
import stone3 from '../../../images/citrine.jpeg'
import stone4 from '../../../images/h3.png'
import stone5 from '../../../images/try2.jfif'
import stone6 from "../../../images/pic.jpg"
import st from "../../../images/p.png"
import st2 from "../../../images/-Apatite.jpg"
import st3 from "../../../images/Agate.jpg"
import st4 from "../../../images/Corindon.jpg"
// pic
import one from "../../../images/one (2).jpg"
import two from "../../../images/one (3).jpg"
import three from "../../../images/one (4).jpg"
import four from "../../../images/one (5).jpg"
import five from "../../../images/one (6).jpg"
import sex from "../../../images/gallery/one.jpeg"
import seven from "../../../images/gallery/two.jpeg"
import eight from "../../../images/gallery/three.jpeg"
import nine from "../../../images/gallery/four.jpeg"
import teen from "../../../images/gallery/five.jpeg"
import eleven from "../../../images/gallery/eleven.jpeg"
import twele from "../../../images/gallery/twele.jpeg"
import thirteen from "../../../images/gallery/thirteen.jpeg"
import fourteen from "../../../images/gallery/fourteen.jpeg"
import fifteen from "../../../images/gallery/fifteen.jpeg"
import sixteen from "../../../images/gallery/sixteen.jpeg"
import seventeen from "../../../images/gallery/seventeen.jpeg"
import eighteen from "../../../images/gallery/eighteen.jpeg"
import ninteen from "../../../images/gallery/twentyone.jpeg"
import tweenty from "../../../images/gallery/twenty.jpeg"


// mock data fteching like api dynomics

  const MockData =[
    {
        id:1,
        img:one,
        title:"Jewellery Gems",
       
    },
    {
        id:2,
        img:two,
        title:"Elizibene Stone",
       
    },
    {
        id:3,
        img:three,
        title:"Shila Cunha",
       
    },
    {
        id:4,
        img:four,
        title:"Color,Gemestone",
       
    },
    {
        id:5,
        img:five,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:sex,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:seven,
        title:"Jewellery Gems",
       
    },
    {
        id:7,
        img:eight,
        title:"Jewellery Gems",
       
    },
   
    {
        id:8,
        img:nine,
        title:"Jewellery Gems",
       
    },
    {
        id:1,
        img:teen,
        title:"Jewellery Gems",
       
    },
    {
        id:2,
        img:eleven,
        title:"Elizibene Stone",
       
    },
    {
        id:3,
        img:twele,
        title:"Jewellery  Stone",
       
    },
    {
        id:4,
        img:thirteen,
        title:"Jewellery Gems",
       
    },
    {
        id:5,
        img:fourteen,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:fifteen,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:sixteen,
        title:"Jewellery Gems",
       
    },
    {
        id:7,
        img:seventeen,
        title:"Jewellery Gems",
       
    },
   
   
    {
        id:8,
        img:eighteen,
        title:"Jewellery Gems",
       
    },
    {
        id:9,
        img:ninteen,
        title:"Jewellery Gems",
       
    },
    {
        id:10,
        img:tweenty,
        title:"Jewellery Gems",
       
    },
   
   
  
  ]
const Section_A = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
  return (
  <>

     <div className='about_section'>
        <Container>
            <Row>
            <Col lg={{span:8, offset:2}}  data-aos="fade-up">
                    <h2 >special stones</h2>
                    <p style={{ padding: '20px 30px', color:"gray", fontSize:'19px'}}>Have a question? You can reach out directly to your Stone Source Representative or you can contact us here and we’ll have someone get back to you soon.</p>
                   
                    
                </Col>
            </Row>
           {/* \just for fun */}
            {/* second line */}
    
            <section className='about_wrapper'>
         <Container>
            <Row   className='justify-content-md-center pt-lg-4 pt-0'>{MockData.map((cardData,index)=>(
                <Col data-aos="fade-up " lg={3} sm={6} md={4} className='mb-4 ' key={index} >
                    <div className=''>
                        {/* try start */}

                        {/*  */}
                        {/* <div className='card-body'> */}
                        <div className='about_box text-center'>
                        <div className='about_icon'>
                            <img 
                            src={cardData.img}
                             alt='icon' 
                             className='img-fluid' />
                        </div>
                        <h4>{cardData.title}</h4>
                        
                    </div>
                        {/* </div> */}
                    </div>
                </Col>
            ))}</Row>
         </Container>
       </section> 
        </Container>
     </div>
 
  </>
  )
}

export default Section_A
