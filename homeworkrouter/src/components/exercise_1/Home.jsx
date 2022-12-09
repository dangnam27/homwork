import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className='bg-primary bg-gradient main'>
      <div className='formInfo m-auto fw-semibold bg-white p-5 rounded-3 shadow-sm'>
        <p>Email: {state.email}</p>
        <p>Password: {state.password}</p>
        <button onClick={() => {
          navigate(-1)
        }} className="btn btn-success">Back</button>
      </div>


    </div>
  )
}
