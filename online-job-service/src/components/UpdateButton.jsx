import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateButton({ id, title, author, status }) {
  const navigate = useNavigate();
  const handleUpdate = () => {
    // console.log(id, title, author);
    const jsonData = { _id: id, title: title, author: author, status: status };
    navigate("/update", { state: jsonData });
  };
  return (
    <button className="btn btn-warning" onClick={handleUpdate}>
      Update
    </button>
  );
}

export default UpdateButton;
