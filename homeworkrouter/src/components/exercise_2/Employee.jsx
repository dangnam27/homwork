import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Employee = () => {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    const navigate = useNavigate();
    const { state } = useLocation();
    const handleClick = (e, index) => {
        console.log(e)
        navigate('/employeeDetail', { state: { id: e.id, name: e.name, age: e.age } })
    }
    return (
        <div className='bg-light d-grid pb-5'>
            <h1 className='text-center text-success mt-5'>Welcome {state.email}</h1>
            <h2 className='text-center my-5'>Employee</h2>
            <table className='table table-hover table-bordered container'>
                <thead className='table-warning'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e, index) => (
                        <tr key={index}>
                            <td className='fw-bolder'>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>
                                <button
                                    className='btn btn-info'
                                    onClick={() => { handleClick(e, index) }}
                                >Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='m-auto mt-3'>
                <button
                    className='btn btn-warning px-4'
                    onClick={() => {
                        navigate('/')
                    }}
                >Logout
                </button>
            </div>
        </div>
    )
}
