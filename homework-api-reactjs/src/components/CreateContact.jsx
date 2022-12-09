import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import "./contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateContact = () => {
  const [user, setUser] = useState({
    img: "",
    username: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getUrlImage = (e) => {
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios
      .post(`https://v2.convertapi.com/upload`, fd)
      .then((res) => {
        setUser({ ...user, img: res.data });
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    axios
      .post(`http://localhost:3000/contacts`, user)
      .then((res) => navigate(`/`))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container my-5">
      <h2 className="mb-5">Add Contact</h2>
      <Formik
        initialValues={user}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleSubmit}>
        <Form>
          <img
            // src={imgData.Url}
            src={user.img.Url}
            alt=""
            className="avatar rounded-circle me-4"
          />
          <Field
            type="file"
            name="img"
            value={""}
            onChange={getUrlImage}
            className="custom-file-input"></Field>
          <div className="mt-4">
            <label htmlFor="username" className="fw-bold mb-2">
              Name
            </label>
            <Field
              id="username"
              name="username"
              value={user.username || ""}
              onChange={handleChange}
              className="form-control"></Field>
            <ErrorMessage
              name="username"
              className="text-danger fw-bold"
              component="div"></ErrorMessage>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="fw-bold mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              value={user.email || ""}
              onChange={handleChange}
              className="form-control"></Field>
            <ErrorMessage
              name="email"
              className="text-danger fw-bold"
              component="div"></ErrorMessage>
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="fw-bold mb-2">
              Phone
            </label>
            <Field
              type="number"
              id="phone"
              name="phone"
              value={user.phone || ""}
              onChange={handleChange}
              className="form-control"></Field>
            <ErrorMessage
              name="phone"
              className="text-danger fw-bold"
              component="div"></ErrorMessage>
          </div>
          <button type="submit" className="btn btn-success mt-4 px-4">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateContact;
