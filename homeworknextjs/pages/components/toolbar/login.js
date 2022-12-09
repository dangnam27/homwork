import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../styles/Login.module.css";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();
  const validateYup = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (form.email === "admin@gmail.com" && form.password === "admin@123") {
      router.push("/");
    } else {
      alert("Account not incorrect");
    }
  };
  return (
    <div className={`bg-info bg-gradient ${styles.main}`}>
      <div className={`bg-white  rounded-3 shadow-sm ${styles.formLogin}`}>
        <h2 className="text-center">Login</h2>
        <hr />
        <Formik
          initialValues={form}
          validationSchema={validateYup}
          enableReinitialize={true}
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <Form className="d-grid gap-3 pt-2">
            <Field
              className="d-block form-control"
              type="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}></Field>
            <ErrorMessage
              name="email"
              component="p"
              className="text-danger fw-bold "></ErrorMessage>
            <Field
              className="d-block form-control"
              type="password"
              name="password"
              value={form.password || ""}
              onChange={handleChange}></Field>
            <ErrorMessage
              name="password"
              component="p"
              className="text-danger fw-bold "></ErrorMessage>
            <button
              onSubmit={handleSubmit}
              className="rounded-pill p-1 border btn btn-primary"
              type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
