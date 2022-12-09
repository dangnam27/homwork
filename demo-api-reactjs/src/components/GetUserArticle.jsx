import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const GetUserArticle = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const getUser = axios.get(`http://localhost:3000/users`);
    const getArticle = axios.get(`http://localhost:3000/articles`);
    axios
      .all([getUser, getArticle])
      .then(
        axios.spread((res1, res2) => {
          const users = res1.data.map((user) => ({
            ...user,
            article: res2.data.filter((item) => item.user_id === user.id),
          }));
          setListUsers([...users]);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Article numbers</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.article.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUserArticle;
