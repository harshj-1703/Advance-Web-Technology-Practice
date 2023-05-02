import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import JobLists from "./components/JobLists";
import JobDetails from "./components/JobDetails";
import "./navbar.css"; // assuming you have created a separate CSS file for navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Online Job Portal</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </nav>
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <JobLists />
              </>
            }
          ></Route>
          <Route path="/add" element={<></>}></Route>
          <Route path="/jobdetails" element={<JobDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
