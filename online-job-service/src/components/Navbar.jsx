import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
import myImage from "../assets/1.jpg";
import { signInWithGoogle } from "../firebase-config";

function Navbar() {
  return (
    <nav className="navbar">
      {localStorage.getItem("displayName") && (
        <div className="user-info">
          <h1>{localStorage.getItem("displayName")}</h1>
          <img src={localStorage.getItem("profilePic")} />
        </div>
      )}
      {!localStorage.getItem("displayName") && (
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      )}
      <div className="heading">
        <div className="logo">
          <img src={myImage} alt="Online Job Portal" />
        </div>
        <h4>Online Job Portal</h4>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          {localStorage.getItem("email") ==
            "harsh.jolapara110578@marwadiuniversity.ac.in" && (
            <li>
              <Link to="/add">Add Job</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
