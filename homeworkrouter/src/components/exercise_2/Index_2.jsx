import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Employee } from './Employee'
import { Login } from './Login'
import { EmployeeDetail } from './EmployeeDetail'
export const Index_2 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/employee' element={<Employee />}></Route>
                <Route path='/employeeDetail' element={<EmployeeDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
