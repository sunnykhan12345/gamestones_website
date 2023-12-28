import React from "react";
// import "./Login.css"
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import { useState } from "react";
import {Axios} from 'axios'
const Login = () => {

  const[username, setUserName] = useState(" ");
  const[email,setEmail] = useState(" ");
  const[password, setPassword] = useState(" ");

      const handleSubmit = (e) =>{
          e.preventDefault();
          Axios.post("https://642343da77e7062b3e2ee702.mockapi.io/formdata", {
            username:username,
            email:email,
            password:password
        }).then((res)=>{
              console.log(res)
              alert(res)

        })
      }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <section id="login">
        <Container className="login">
          <Row className="text-center">
            <Col>
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <h1>Login</h1>
                 
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter userName" name="username" className='input'  />
                    <br />
                    
                    <input type="email"value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email" name="email" className='input'  />
                    <br />
                    
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" name="pass" className='input' />
                    <br />

                    <div className="d-grid mt-3">
                    <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                  </form>
                </div>
                
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
      </form>
    </>
  );
};

export default Login;
