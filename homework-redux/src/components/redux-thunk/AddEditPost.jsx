import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddEditPost = () => {
  const navigate = useNavigate();
  const changeMode = useSelector((state) => state.reducerMode);
  const formSchema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
  });

  if (changeMode.mode === "ADD") {
    const addSubmit = (e) => {
      axios
        .post(`http://localhost:3001/posts`, e)
        .then((res) => {
          navigate(`/`);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="container mt-5">
        <h2 className="text-warning mb-4">ADD POST</h2>
        <Formik
          initialValues={{ title: "", body: "" }}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={addSubmit}>
          <Form>
            <Field
              name="title"
              placeholder="Enter your title"
              className="form-control mb-3"></Field>
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger fw-bold "></ErrorMessage>
            <Field
              name="body"
              placeholder="Enter your body"
              className="form-control mb-3"></Field>
            <ErrorMessage
              name="body"
              component="div"
              className="text-danger fw-bold "></ErrorMessage>
            <button type="submit" className="btn btn-success mt-3">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  } else if (changeMode.mode === "EDIT") {
    const editSubmit = (e) => {
      axios
        .put(`http://localhost:3001/posts/${changeMode.data.id}`, e)
        .then((res) => navigate(`/`))
        .catch((err) => console.log(err));
    };
    return (
      <div className="container mt-5">
        <h2 className="text-warning mb-4">EDIT POST</h2>
        <Formik
          initialValues={{
            title: changeMode.data.title,
            body: changeMode.data.body,
          }}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={editSubmit}>
          <Form>
            <Field
              name="title"
              placeholder="Enter your title"
              className="form-control mb-3"></Field>
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger fw-bold "></ErrorMessage>
            <Field
              name="body"
              placeholder="Enter your body"
              className="form-control mb-3"></Field>
            <ErrorMessage
              name="body"
              component="div"
              className="text-danger fw-bold "></ErrorMessage>
            <button type="submit" className="btn btn-success mt-3">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
};

export default AddEditPost;
