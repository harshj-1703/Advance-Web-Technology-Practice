import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import JobLists from "./components/JobLists";
import JobDetails from "./components/JobDetails";
import AddJob from "./components/AddJob";
import "./navbar.css";
import myImage from "./assets/1.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={myImage} alt="Online Job Portal" />
      </div>
      <h4>Online Job Portal</h4>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add">Add Job</Link>
          </li>
        </ul>
      </div>
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
          <Route path="/add" element={<AddJob />}></Route>
          <Route path="/jobdetails" element={<JobDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
