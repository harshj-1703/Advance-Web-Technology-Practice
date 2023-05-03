import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobLists from "./components/JobLists";
import JobDetails from "./components/JobDetails";
import AddJob from "./components/AddJob";
import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobLists />}></Route>
          <Route
            path="/add"
            element={
              localStorage.getItem("email") ===
              "harsh.jolapara110578@marwadiuniversity.ac.in" ? (
                <AddJob />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route path="/jobdetails" element={<JobDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
