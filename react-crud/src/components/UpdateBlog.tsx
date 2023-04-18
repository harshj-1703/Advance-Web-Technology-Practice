import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateBlog = () => {
  const location = useLocation();
  const jsonData = location.state;
  const id = jsonData.blogs._id;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: jsonData.blogs.title,
    description: jsonData.blogs.description,
  });

  //POST add data
  const updateData = async () => {
    const response = await fetch("http://localhost:5000/api/blog/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
      }),
    });
    const jsonData = await response.json();
    console.log("updateblog", jsonData);
    navigate("/");
  };

  //add blog handle submit
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    updateData();
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter blog title"
            onChange={handleInput}
            value={formData.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleInput}
            value={formData.description}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateBlog;
