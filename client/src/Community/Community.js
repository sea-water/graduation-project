import React from "react";
import "./Community.css";
import logo from "../img/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cmain from "./Cmain";
import Cplatfrom from "./Cplatfrom";
import Cinformation from "./Cinformation";
import Cbest from "./Cbest";
export default function Community() {
  return (
    <div className="Community">
      <div className="c_header">
        <div className="c_left">
          {/* <FontAwesomeIcon icon={faBars} size="2x"/> */}
          <Link to="/">
            <img className="c_logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="c_center">
          <Link
            to="/Community"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>메인</h1>
          </Link>
          <Link to="Cbest" style={{ textDecoration: "none", color: "black" }}>
            <h1>베스트</h1>
          </Link>
          <Link
            to="Cplatfrom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>플랫폼</h1>
          </Link>
          <Link
            to="Cinformation"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>정보</h1>
          </Link>
        </div>
        <div className="c_right">
          <input className="c_input" placeholder="무엇이 궁금하세요?" />
          <button className="c_button">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /> */}
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/*" element={<Cmain />} />
        <Route path="Cplatfrom" element={<Cplatfrom />} />
        <Route path="Cinformation" element={<Cinformation />} />
        <Route path="Cbest" element={<Cbest />} />
      </Routes>
    </div>
  );
}
