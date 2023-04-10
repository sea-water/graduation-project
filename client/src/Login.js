import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Login() {
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
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <label>User Name</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="pass">Forgot password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}