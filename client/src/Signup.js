import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Signup() {
  return (
    <div>
      <Link to="/">
        <div className="banner">
          <img
            className="bannerLogo"
            src={logo}
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
      </Link>
      <div className="center">
        <h1>Sign up</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <label>User Name</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <label>Address</label>
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}
