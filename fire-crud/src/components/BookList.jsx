import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BookList from "../services/book.services";

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const data = await bookService.getAllBooks();
    console.log(data.docs);
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
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.title}</td>
              <td>{doc.author}</td>
              <td>{book.status}</td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Test Book</td>
            <td>Test Author</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Test Book New</td>
            <td>Test New Author</td>
            <td>Not Available</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
