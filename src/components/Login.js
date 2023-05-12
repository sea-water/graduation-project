import {React,useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import axios from "axios";
export default function Login() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  
  });
  const handleFormChange = (e) => {
    setFormData((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value,
    }));
    };
    
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
    await axios.post("http://localhost:8080/members/new", formData, { withCredentials: true });
    alert("회원가입이 완료되었습니다.");
    } catch (e) {
    alert("회원가입에 실패하였습니다.");
    }
    };
    

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
        <form method="post"  onSubmit={handleFormSubmit}>


          <div className="txt_field">
            <input type="text" 
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required />
           
            <label>User Name</label>
          </div>


          <div className="txt_field">
            <input type="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
            required />
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