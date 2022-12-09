import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
const EditUser = () => {
  const { state } = useLocation();
  const [form, setForm] = useState({ name: "", birthday: "" });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${state.id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required(),
    birthday: yup.date().required(),
  });
  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${state.id}`, form)
      .then((res) => {
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Edit User</h2>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="name"
            value={form.name || ""}
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
            value={form.birthday || ""}
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

export default EditUser;
