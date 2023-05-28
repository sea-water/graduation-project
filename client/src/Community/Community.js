import React, { useState } from "react";
import "./Community.css";
import logo from "../img/main_logo.jpg";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Cmain from "./Cmain";
import Cbest from "./Cbest";

export default function Community() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="banner_btnItems">
          <div />
          <div className="right-buttons">
            <input className="inputForm" placeholder="무엇이 궁금하세요?" />
            <button className="searchBtn">
              <FiSearch />
            </button>
            {isLoggedIn ? (
              <button>LOG OUT</button>
            ) : (
              <React.Fragment>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/SignUp")}
                >
                  SIGN UP
                </button>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/LogIn")}
                >
                  LOG IN
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </span>

      <Routes>
        <Route path="/*" element={<Cmain />} />
        <Route path="Cbest" element={<Cbest />} />
      </Routes>
    </div>
  );
}
