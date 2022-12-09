import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export const BookManager = () => {
  const [book, setBook] = useState({ title: "", number: "" });
  const [listBook, setListBook] = useState([
    { title: "Phong Vân", number: "10" },
    { title: "Linh Vũ Thiên Hạ", number: "10" },
  ]);
  const [status, setStatus] = useState({ mode: "add", index: "" });
  const bookSchema = yup.object().shape({
    title: yup.string().required("Tiêu đề không được để trống"),
    number: yup.number().required("Số lượng không được để trống"),
  });
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (status.mode === "add") {
      listBook.push(book);
      setListBook([...listBook]);
      setBook({ title: "", number: "" });
    } else {
      listBook[status.index] = { ...book };
      setListBook([...listBook]);
      setBook({ title: "", number: "" });
      setStatus({ mode: "add", index: "" });
    }
  };

  const handleEdit = (e, index) => {
    setBook({ title: e.title, number: e.number });
    setStatus({ mode: "save", index: index });
  };
  const handleDelete = (index) => {
    listBook.splice(index, 1);
    setListBook([...listBook]);
  };
  return (
    <div>
      <div className="m-auto p-5" style={{ width: "500px" }}>
        <h1 className="text-center bg-primary bg-opacity-10">Thư viện sách</h1>
        <Formik
          initialValues={book}
          enableReinitialize={true}
          validationSchema={bookSchema}
          onSubmit={handleSubmit}>
          <Form>
            <div className="form-outline">
              <label htmlFor="title" className="d-block form-label">
                Tiêu đề
              </label>
              <Field
                name="title"
                type="text"
                id="title"
                onChange={handleChange}
                value={book.title || ""}
                className="form-control"></Field>
              <ErrorMessage
                name="title"
                component="p"
                className="text-danger fw-bold"></ErrorMessage>
            </div>

            <label htmlFor="number" className="d-block">
              Số lượng
            </label>
            <Field
              name="number"
              type="number"
              id="number"
              onChange={handleChange}
              value={book.number || ""}></Field>
            <ErrorMessage
              name="number"
              component="p"
              className="text-danger fw-bold"></ErrorMessage>
            {status.mode === "add" ? (
              <button
                onSubmit={handleSubmit}
                className="d-block mt-3 rounded-2 border border-primary"
                type="submit">
                Submit
              </button>
            ) : (
              <button
                onSubmit={handleSubmit}
                className="d-block mt-3 rounded-2 border border-primary"
                type="submit">
                Save
              </button>
            )}
          </Form>
        </Formik>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Số lượng</th>
              <th>Tác động</th>
            </tr>
          </thead>
          <tbody>
            {listBook.map((e, index) => (
              <tr key={index}>
                <td>{e.title}</td>
                <td>{e.number}</td>
                <td>
                  <button
                    className="rounded-2 border border-primary"
                    onClick={() => {
                      handleEdit(e, index);
                    }}>
                    Edit
                  </button>
                  <button
                    className="rounded-2 border border-primary ms-2"
                    onClick={() => {
                      handleDelete(index);
                    }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
