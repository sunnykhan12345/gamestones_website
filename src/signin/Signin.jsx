import React from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Signin = () => {
  return (
    <>
       <form>
      <section id="login">
        <Container className="login">
          <Row className="text-center">
            <Col>
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <h1>Sign in</h1>
                 
                    {/* <input type="text" placeholder="UserName" name="username" />
                    <br />
                     */}
                    <input type="email" placeholder="Email" name="email" />
                    <br />
                    
                    <input type="password"  placeholder="password" name="pass" />
                    <br />

                    <input type="password"  placeholder="Confirm password" name="pass" />
                    <br />
                 
                    <div className="flex-end">
                      <a href="#">Forget Password</a>
                    </div>
                    <div className="login-btn">
                      <a href="#" type="submit">Signin</a>
                    </div>
                    <p className="text">Or Signin Using</p>

                    <div className="alt-login">
                      <div className="facebook">
                     
                      </div>
                      <div className="google">
                    
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
  )
}

export default Signin
