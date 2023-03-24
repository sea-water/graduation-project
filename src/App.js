import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products";
import Community from "./components/Community";
import Main from "./components/Main";
import Signup from "./components/Signup";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          <div className="banner">
            <img
              className="bannerLogo"
              src="https://cdn-icons-png.flaticon.com/512/4729/4729230.png"
              width="50px"
              height="50px"
              alt="logo"
            />
          </div>
        </Link>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
