import React,{useState} from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Axios } from 'axios'

const Signin = () => {
  const[username, setUserName] = useState(" ");
  const[email,setEmail] = useState(" ");
  const[password, setPassword] = useState(" ");
  const[confirmpassword, setConfirmPassword] = useState(" ");

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
          <Row className="">
            <Col>
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <h1 className='fw-bold'>Registration</h1>
                       <input type="text" placeholder="Enter your name" name="name" className='input' value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <br />
                    <input type="email" placeholder=" Enter your email" name="email" className='input'  value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    
                    <input type="password"  placeholder="Create password" name="pass"  className='input'  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br />

                    <input type="password"  placeholder="Confirm password" name="pass" className='input'  value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <br />
                 
                    <div className="checkbox">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" className='mr-2'/>
                      <label class="form-check-label" for="exampleCheck1">i accepts terms and conditions </label>
                    </div>
                    <div className='d-grid mt-3 mb-3'>
                    <button type="submit" className='btn btn-primary'>submit</button>
                    </div>
                    <p>Already have an account ? <Link to="/login"><span className='text-danger fw-bolder'>Login Now</span></Link></p>
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
