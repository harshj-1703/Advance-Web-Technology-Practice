import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const addData = async () => {
    const response = await fetch("http://localhost:5000/api/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
      }),
    });
    const jsonData = await response.json();
    console.log("addblog", jsonData);
    navigate("/");
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    addData();
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
