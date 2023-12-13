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
          Axios.post("https://jsonplaceholder.typicode.com/posts", {
            username,
            email,
            password
        }).then((res)=>{
              console.log(res)

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
                 
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="UserName" name="username" />
                    <br />
                    
                    <input type="email"value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" name="email" />
                    <br />
                    
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" name="pass" />
                    <br />
                 
                    <div className="flex-end">
                      <a href="#">Forget Password</a>
                    </div>
                    <div className="login-btn">
                      <a href="#" type="submit">Login</a>
                    </div>
                    <p className="text">Or Login Using</p>

                    <div className="alt-login">
                      <div className="facebook">
                        <AiFillFacebook />
                      </div>
                      <div className="google">
                        <AiFillGoogleSquare />
                      </div>
                    </div>
                    <button type="submit">submit</button>
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
