import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const ContactSchema = yup.object().shape({
    username: yup.string().required("Username must be filled"),
    email: yup
      .string()
      .required("Email must be filled")
      .email("Email not correct format"),
    phone: yup.number().required("Phone must be filled"),
  });

  const REGEX = {
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "phone") {
      let errorPhone = REGEX.phone.test(e.target.value)
        ? ""
        : "Phone not format";
      setError({ ...error, phone: errorPhone });
    }
  };
  const handleSubmit = (e) => {
    if (!error.phone) {
      console.log(e);
      alert("Add contact successfully!!!");
    } else console.log(error);
  };
  return (
    <div className=" m-auto" style={{ width: "max-content" }}>
      <h1 className="mt-5">CONTACT FORM</h1>
      <Formik
        initialValues={form}
        validationSchema={ContactSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}>
        <Form className="mt-3">
          <label htmlFor="username" className="d-block mt-3">
            Username:
          </label>
          <Field
            type="text"
            name="username"
            id="username"
            value={form.username || ""}
            onChange={handleChange}
            className="form-control"></Field>
          <ErrorMessage
            name="username"
            component="p"
            className="text-danger fw-bold"></ErrorMessage>
          <label htmlFor="email" className="d-block mt-3">
            Email:
          </label>
          <Field
            type="email"
            name="email"
            id="email"
            value={form.email || ""}
            onChange={handleChange}></Field>
          <ErrorMessage
            name="email"
            component="p"
            className="text-danger fw-bold"></ErrorMessage>

          <label htmlFor="phone" className="d-block mt-3">
            Phone:
          </label>
          <Field
            type="number"
            name="phone"
            id="phone"
            value={form.phone || ""}
            onChange={handleChange}></Field>
          {/* <ErrorMessage name="phone" component="p" className='text-danger fw-bold'></ErrorMessage> */}
          <p className="text-danger fw-bold">{error.phone}</p>

          <label htmlFor="message" className="d-block mt-3">
            Message:
          </label>
          <Field
            as="textarea"
            name="message"
            id="message"
            value={form.message || ""}
            onChange={handleChange}></Field>
          <ErrorMessage
            name="message"
            component="p"
            className="text-danger fw-bold"></ErrorMessage>
          <button
            type="submit"
            className="rounded d-block mt-3 border border-primary text-primary"
            onSubmit={handleSubmit}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
