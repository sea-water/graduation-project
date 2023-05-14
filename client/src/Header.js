import React, { useState, useRef } from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "./img/main_logo.jpg";
import ImageSlider from "./ImageSlide";
import midBanner from "./img/banner.jpeg";
import about_hl from "./img/about_hl.png";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";

const Header = () => {
  return (
    <div className="top_banner">
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="bannerBtns_left">
          <a
            className="bannerBtn"
            href="/Products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="bannerTitle"> PRODUCTS</span>
          </a>

          <a
            className="bannerBtn"
            href="/Community"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="bannerTitle"> COMMUNITY</span>
          </a>
          <a
            className="bannerBtn"
            href="/Todo/Todos"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="bannerTitle"> TO DO LIST</span>
          </a>
        </div>
        <div className="bannerBtns_right">
          <a
            className="bannerBtn"
            href="/Login"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FiLogIn color="gray" />
            <span className="bannerTitle"> LOGIN</span>
          </a>

          <a
            className="bannerBtn"
            href="/Signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            <BsFillPersonPlusFill color="gray" />
            <span className="bannerTitle"> SIGN UP</span>
          </a>
        </div>
      </span>
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <img
          className="logo_mean_left"
          src={logo_mean_left}
          alt="logo_meaning"
        />
        <img
          className="logo_mean_right"
          src={logo_mean_right}
          alt="logo_meaning2"
        />
      </div>
    </div>
  );
};

export default Header;
