import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='container-fluid py-5  my-5' style={{background:"#22092C"}}>
        <div className='row justify-center'>
       <div className='col-lg-8 col-sm-12 text-center'>
        <div className='card text-center bg-slate-500' style={{background:"#22092C"}}>
            <div className='card-body'>
                <h2 className='p-4 text-white fw-bolder' style={{background:"#872341"}}>Add Payments Here  Through</h2>
                <button className='btn btn-outline-danger my-5 me-5'>Credit Card</button>
                <button className='btn btn-outline-info dark my-5 me-5'>Easy Paisa</button>
                <button className='btn btn-outline-warning success my-5 '>Jazz Cash</button>
            </div>
        </div>
        <Link to='/'>
        <button className='btn btn-outline-danger'>Back To Home</button>
        </Link>
       </div>
        </div>
      
    </div>
  )
}

export default Cart
