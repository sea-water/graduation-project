import React, { useState } from "react";
import "./Login.css";
import Header from "./Header";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 로그인 처리 로직을 구현합니다.
    // 성공적으로 로그인되었다면 setIsLoggedIn(true)로 상태를 변경합니다.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현합니다.
    // 로그아웃되었다면 setIsLoggedIn(false)로 상태를 변경합니다.
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header />
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
            Not a member? <a href="/Signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
