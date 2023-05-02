import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BookLists from "./components/BookLists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBook from "./components/UpdateBook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container>
                  <Row>
                    <Col>
                      <AddBook />
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col>
                      <BookLists></BookLists>
                    </Col>
                  </Row>
                </Container>
              </>
            }
          ></Route>
          <Route path="/update" element={<UpdateBook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
