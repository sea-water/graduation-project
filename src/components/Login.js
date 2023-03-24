import React from "react";
import "./Login.css";

export default function Login() {
  return (
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
  );
}
