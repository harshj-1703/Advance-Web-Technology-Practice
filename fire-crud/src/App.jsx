import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BookLists from "./components/BookLists";

const App = () => {
  return (
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
  );
};

export default App;
