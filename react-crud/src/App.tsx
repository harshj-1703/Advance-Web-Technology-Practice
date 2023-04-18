import React from "react";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UpdateBlog from "./components/UpdateBlog";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        {/* <AddBlog /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
          <Route path="/update" element={<UpdateBlog />}></Route>
        </Routes>
        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
