import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const UserList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.initUsers);

  const ShowUsersList = () => {
    dispatch({ type: "FETCH_USER" });
  };
  const DeleteUsersList = (id) => {
    axios
      .delete(`http://localhost:3000/usersSaga/${id}`)
      .then((res) => {
        dispatch({ type: "FETCH_USER" });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Users List</h1>
      <button
        className="btn btn-info mx-auto d-block mt-4"
        onClick={ShowUsersList}>
        Get users
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.website}</td>
              <td>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => {
                    DeleteUsersList(e.id);
                  }}>
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
