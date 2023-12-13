import React from 'react'
import './PageNotMatch.css'
import { Link } from 'react-router-dom'
const PageNotMatch = () => {
  return (
    <>
      <div className='error'>
         <h1> oops page was not found ! 😿  </h1> <br/>
        <Link to='/'>
        <button className='btn btn-outline-light'>Back to Home Page</button>
        </Link>

    </div>
    </>
  
  )
}

export default PageNotMatch
