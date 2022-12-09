import React from "react";
import { useState } from "react";
import axios from "axios";
const UploadImage = () => {
  const [showImg, setShowImg] = useState();
  const [urlImg, setUrlImg] = useState();
  const handleChange = (e) => {
    setShowImg(e.target.files[0]);
  };
  const handleSubmit = () => {
    const fd = new FormData();
    fd.append("file", showImg);
    axios
      .post(`https://v2.convertapi.com/upload`, fd)
      .then((res) => {
        console.log(res.data);
        setUrlImg(res.data.Url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-3">
      <input type="file" onChange={handleChange} className="form-control" />
      <br />
      <button className="btn btn-primary mt-2 px-5" onClick={handleSubmit}>
        Submit
      </button>
      <img src={urlImg} style={{ width: "200px" }}></img>
    </div>
  );
};

export default UploadImage;
