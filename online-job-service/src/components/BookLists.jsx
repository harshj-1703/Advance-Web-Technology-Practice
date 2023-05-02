import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { bookService } from "../services/book.services";
import DeleteBook from "./DeleteBook";
import UpdateButton from "./UpdateButton";

const BookLists = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await bookService.getAllBooks();
    console.log(data.docs);
    var newdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(newdata);
    setBooks(newdata);
  };
  return (
    <div>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
              <td>
                <DeleteBook id={book.id} />
              </td>
              <td>
                <UpdateButton
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  status={book.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookLists;
