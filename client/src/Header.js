import React from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import logo from "./img/logo.png";
import ImageSlider from "./ImageSlide";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <span className="banner">
        <Link to="/" >
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

        <a className="bannerBtn" href="/Products" style={{ textDecoration: "none" ,color:"black"}}>
          <span> PRODUCTS</span>
        </a>

        <a className="bannerBtn" href="/Community" style={{ textDecoration: "none" ,color:"black"}}> 
          <span className="bannerTitle"> COMMUNITY</span>
        </a>
        <a className="bannerBtn" onClick={handleOpen} style={{ textDecoration: "none" ,color:"black"}}>
          <BsFillPersonFill color="gray" />
          <span className="bannerTitle"> MY PAGE</span>
          {open ? (
            <ul className="menu">
              <a className="menu-item" href="./TodoList">
                <button>To Do List</button>
              </a>
              <a className="menu-item" href="./myCalendar">
                <button>Monthly</button>
              </a>
            </ul>
          ) : null}
        </a>

        <a className="bannerBtn" href="/Login" style={{ textDecoration: "none" ,color:"black"}}>
          <FiLogIn color="gray" />
          <span className="bannerTitle"> LOGIN</span>
        </a>

        <a className="bannerBtn" href="/Signup" style={{ textDecoration: "none" ,color:"black"}}>
          <BsFillPersonPlusFill color="gray" />
          <span className="bannerTitle"> SIGN UP</span>
        </a>
      </span>
      <ImageSlider />
    </div>
  );
}