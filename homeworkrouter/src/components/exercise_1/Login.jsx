import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './Login.css'
export const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    const navigate = useNavigate();
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        if (form.email === "admin@gmail.com" && form.password === "letmein") {
            navigate('/home', { state: { email: form.email, password: form.password } })
        } else {
            alert("Account not correct!")
            setForm({ email: '', password: '' })
        }
    }
    return (
        <div className='bg-info bg-gradient main'>
            <div className='bg-white formLogin rounded-3 shadow-sm'>
                <h2 className='text-center'>Login</h2>
                <hr />
                <Formik
                    initialValues={form}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                    validationSchema={loginSchema}
                >
                    <Form className='d-grid gap-3 pt-2'>
                        <Field name='email' type='email' className='d-block form-control' value={form.email || ""} onChange={handleChange} placeholder="Email" />
                        <ErrorMessage component="span" name='email' className='text-danger fw-bold ' />
                        <Field name='password' type='password' className='d-block form-control' value={form.password || ""} onChange={handleChange} placeholder="Password" />
                        <ErrorMessage component="span" name='password' className='text-danger fw-bold ' />
                        <button onSubmit={handleSubmit} className="rounded-pill p-1 border btn btn-primary">Login</button>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}
