import { useState } from "react"
import { InputForm } from "./InputForm"

export const SignUpForm = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "", repassword: "" })
    const ERROR_MESSAGE = {
        username: "Username erorr",
        password: "Password erorr",
        email: "Email erorr",
        repassword: "Repassword must be same"
    }
    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
        repassword: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const handleChange = (e) => {
        let error = "";

        if (e.target.name === "repassword" && form.password.value) {
            error = e.target.value === form.password.value ? "" : ERROR_MESSAGE[e.target.name]
        }

        else {
            error = REGEX[e.target.name].test(e.target.value) ? "" : ERROR_MESSAGE[e.target.name]
        }
        setForm({ ...form, [e.target.name]: { value: e.target.value, error: error } })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password.value === form.repassword.value && form.email.value && form.username.value && !form.username.error && !form.email.error && !form.password.error && !form.repassword.error) {
            alert("Sign up successfully!!!")
        } else {
            alert("Please complete all the fields!!!")
        }
    }
    return <div className="ms-5">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <InputForm type="text" name="username" onChange={handleChange} label="Username" />
            <span className="text-danger ps-3">{form.username.error}</span>
            <InputForm type="email" name="email" onChange={handleChange} label="Email" />
            <span className="text-danger ps-3">{form.email.error}</span>
            <InputForm type="password" name="password" onChange={handleChange} label="Password" />
            <span className="text-danger ps-3">{form.password.error}</span>
            <InputForm type="password" name="repassword" onChange={handleChange} label="Confirm Password" />
            <span className="text-danger ps-3">{form.repassword.error}</span>
            <button className="d-block mt-3" type="submit">Submit</button>
        </form>

    </div>
}