import React from "react";
import "./style/Header.css";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import logo from "../images/logo.png";
import ImageSlider from "./ImageSlide";
export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <span className="banner">
        <Link to="/">
          <div>
            <img
              className="bannerLogo"
              src={logo}
              width="50px"
              height="50px"
              alt="logo"
            />
          </div>
        </Link>
        <a className="bannerBtn" href="/Products">
          <span> PRODUCTS</span>
        </a>

        <a className="bannerBtn" href="/Community">
          <span className="bannerTitle"> COMMUNITY</span>
        </a>
        <a className="bannerBtn" onClick={handleOpen}>
          <BsFillPersonFill color="gray" />
          <span className="bannerTitle"> MY PAGE</span>
          {open ? (
            <ul className="menu">
              <Link to="/TodoList" className="menu-item">
                <button>To Do List</button>
              </Link>
              <Link to="/MyCalendar" className="menu-item">
                <button>Monthly</button>
              </Link>
            </ul>
          ) : null}
        </a>

        <Link to="/Login" className="bannerBtn">
          <FiLogIn color="gray" />
          <span className="bannerTitle"> LOGIN</span>
        </Link>

        <Link to="/Signup" className="bannerBtn">
          <BsFillPersonPlusFill color="gray" />
          <span className="bannerTitle"> SIGN UP</span>
        </Link>
      </span>
      <ImageSlider />
    </div>
  );
}
