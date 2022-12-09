import { useState } from "react"
import { InputForm } from "./InputForm"
import { Field, Formik, Form, ErrorMessage } from "formik"
import * as yup from 'yup'
export const SignupFormik = () => {
    const [form, setForm] = useState({ Email: '', Password: '' })
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const ValidateSchema = yup.object().shape({
        Email: yup.string().required().email("Email is not in the correct format "),
        Password: yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Password is not in the correct format ")
    })
    const handleSubmit = (e) => {
        console.log(form)
    }
    return <div className="mt-5 ms-5 ">
        <h1>Login</h1>
        {/* <form onSubmit={handleSubmit}>
            <InputForm label="Email" type="email" onChange={handleChange} value={form.Email.value} name="Email" />
            <span className="text-danger">{form.Email.error}</span>
            <InputForm label="Password" type="password" onChange={handleChange} value={form.Password.value} name="Password" />
            <span className="text-danger">{form.Password.error}</span>
            <button onSubmit={handleSubmit} className="d-block mt-3">Submit</button>
        </form> */}

        <Formik
            initialValues={form}
            validationSchema={ValidateSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
            {(errors,touched)=>(
                <Form>
                    <label htmlFor="Email" className="d-block mt-2">Email:</label>
                    <Field type="email"  value={form.Email||""} onChange={handleChange} name="Email" id="Email" placeholder="Email"></Field>
                    <ErrorMessage component="p" className="text-danger" name="Email"></ErrorMessage>
                    <label htmlFor="Password" className="d-block mt-2">Password:</label>
                    <Field type="password" name="Password" id="Password" placeholder="Password" value={form.Password}  onChange={handleChange} ></Field>
                    <ErrorMessage component="p" className="text-danger" name="Password"></ErrorMessage>
                    <button className="d-block mt-3" type="submit">Submit</button>
                </Form>
            )}
        </Formik>



    </div>
}