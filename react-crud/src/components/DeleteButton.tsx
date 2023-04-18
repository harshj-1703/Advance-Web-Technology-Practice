import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  _id: string;
}

function DeleteButton({ _id }: Props) {
  async function deleteBlog(id: string) {
    const url = `http://localhost:5000/api/blog/${id}`;
    const response = await fetch(url, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    console.log("delete blog", jsonData);
    // navigate("/");
    window.location.reload();
  }
  return (
    <button className="btn btn-danger" onClick={() => deleteBlog(_id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
