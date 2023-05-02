import React from "react";
import { bookService } from "../services/book.services";

function DeleteBook({ id }) {
  const handleDelete = () => {
    bookService.deleteBook(id).then(() => {
      window.location.reload();
    });
  };
  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteBook;
