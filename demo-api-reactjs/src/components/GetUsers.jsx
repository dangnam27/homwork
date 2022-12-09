import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/users`);

        setUsers(res.data);
        console.log(res.data);
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const handleEdit = (userID) => {
    navigate(`/edituser`, { state: { id: userID } });
  };

  const handleDelete = (userID) => {
    const confirmation = window.confirm("Are you sure you want to delete");
    if (confirmation) {
      axios
        .delete(`http://localhost:3000/users/${userID}`)
        .then((res) => {
          let arr = users.filter((e) => e.id !== userID);
          setUsers(arr);
        })
        .catch((err) => console.log(err));
    }
  };
  if (loading) {
    return (
      <div className="container mt-5">
        <div className="mb-5">
          <h5 className="d-inline-block me-3">Add user here:</h5>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/adduser");
            }}>
            Create
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => (
              <tr key={e.id} className="align-middle">
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.birthday}</td>
                <td>
                  <button
                    className="btn btn-primary me-3"
                    onClick={() => handleEdit(e.id)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(e.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default GetUsers;
