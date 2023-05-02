import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobLists from "./components/JobLists";

const App = () => {
  return (
    <>
      <JobLists />
    </>
  );
};

export default App;
