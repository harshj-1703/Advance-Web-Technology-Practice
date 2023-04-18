import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  _id: string;
}

function UpdateButton({ _id }: Props) {
  const navigate = useNavigate();
  async function updateBlog(id: string) {
    const response = await fetch("http://localhost:5000/api/blog/" + _id, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    console.log("update blog details", jsonData);
    console.log(id);
    navigate("/update", { state: jsonData });
  }
  return (
    <button className="btn btn-warning" onClick={() => updateBlog(_id)}>
      Update
    </button>
  );
}

export default UpdateButton;
