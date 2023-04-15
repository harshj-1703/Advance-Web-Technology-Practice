import React from "react";
import { useState } from "react";
// import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
