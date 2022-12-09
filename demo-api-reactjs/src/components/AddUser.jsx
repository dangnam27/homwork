import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddUser = () => {
  const [form, setForm] = useState({ name: "", birthday: "" });
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    birthday: yup.date().required(),
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    axios.post(`http://localhost:3000/users`, form).then((res) => {
      navigate(`/`);
    });
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center">Add a User</h3>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"></Field>
          <ErrorMessage
            name="name"
            component="div"
            className="text-capitalize text-danger fw-bold"></ErrorMessage>
          <br />
          <Field
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            className="form-control"></Field>
          <ErrorMessage
            name="birthday"
            component="div"
            className="text-capitalize text-danger fw-bold"></ErrorMessage>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;
