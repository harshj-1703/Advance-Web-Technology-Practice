import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { bookService } from "../services/book.services";

const BookLists = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await bookService.getAllBooks();
    console.log(data.docs);
    var newdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // data.docs.map((doc)=>{
    //     console.log(doc);
    //     console.log(doc.data());
    //     console.log(doc.id);
    //     // {...doc.data(),
    //     //     id: doc.id}
    // }
    // )
    console.log(newdata);
    // setBooks(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
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
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookLists;
