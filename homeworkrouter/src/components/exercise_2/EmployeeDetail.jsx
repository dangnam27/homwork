import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const EmployeeDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className='d-grid gap-4 mt-3'>
      <h1 className='text-center text-success'>Employee Detail</h1>
      <table className='table table-bordered table-hover container align-middle'>
        <thead className='table-warning'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.id}</td>
            <td>{state.name}</td>
            <td>{state.age}</td>
            <td>
              <button
                className='btn btn-secondary'
                onClick={() => navigate(-1)}
              >Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
