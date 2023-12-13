import React, { useEffect } from 'react'
import './Section_A.css'
import { Container,Row,Col } from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css'
import stone1 from '../../../images/Agate.jpg'
import stone2 from '../../../images/Beryl.jpeg'
import stone3 from '../../../images/citrine.jpeg'
import stone4 from '../../../images/h3.png'
import stone5 from '../../../images/try2.jfif'
import {Link} from "react-router-dom"

// mock data fteching like api dynomics

  const MockData =[
    {
        id:1,
        img:stone1,
        title:"Jewellery Gems",
       
    },
    {
        id:2,
        img:stone2,
        title:"Elizibene Stone",
       
    },
    {
        id:3,
        img:stone3,
        title:"Shila Cunha",
       
    },
    {
        id:4,
        img:stone4,
        title:"Color,Gemestone",
       
    },
    {
        id:5,
        img:stone5,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:stone2,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:stone3,
        title:"Jewellery Gems",
       
    },
    {
        id:7,
        img:stone3,
        title:"Jewellery Gems",
       
    },
   
    {
        id:8,
        img:stone1,
        title:"Jewellery Gems",
       
    },
    {
        id:1,
        img:stone1,
        title:"Jewellery Gems",
       
    },
    {
        id:2,
        img:stone2,
        title:"Elizibene Stone",
       
    },
    {
        id:3,
        img:stone3,
        title:"Jewellery  Stone",
       
    },
    {
        id:4,
        img:stone3,
        title:"Jewellery Gems",
       
    },
    {
        id:5,
        img:stone1,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:stone2,
        title:"Jewellery Gems",
       
    },
    {
        id:6,
        img:stone3,
        title:"Jewellery Gems",
       
    },
    {
        id:7,
        img:stone3,
        title:"Jewellery Gems",
       
    },
   
   
    {
        id:8,
        img:stone2,
        title:"Jewellery Gems",
       
    },
    {
        id:9,
        img:stone3,
        title:"Jewellery Gems",
       
    },
    {
        id:10,
        img:stone3,
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
                    <Link to="/" className='btn order-now btn-red'>
                       STONE SOURCES
                    </Link>
                    
                </Col>
            </Row>
            <section className='about_wrapper'>
         <Container>
            <Row   className='justify-content-md-center pt-lg-4 pt-0'>{MockData.map((cardData,index)=>(
                <Col data-aos="fade-up" lg={3} sm={6} md={4} className='mb-4 ' key={index}>
                    <div className='card'>
                        {/* try start */}

                        {/*  */}
                        {/* <div className='card-body'> */}
                        <div className='about_box text-center'>
                        <div className='about_icon'>
                            <img 
                            src={cardData.img}
                             alt='icon' 
                             className='img-fluid custom-img' />
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
