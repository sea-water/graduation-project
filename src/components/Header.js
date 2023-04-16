import React from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import logo from "./img/logo.png";
import ImageSlider from "./ImageSlide";
import gym from "./img/gym.jpg";
import midBanner from "./img/banner.jpeg";
import banner_logo from "./img/banner_logo.jpeg";
import banner_all from "./img/banner_all.jpeg";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="top_banner">
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

        <a
          className="bannerBtn"
          href="/Products"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span> PRODUCTS</span>
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
          onClick={handleOpen}
          style={{ textDecoration: "none", color: "black" }}
          href="/TodoList"
        >
          <BsFillPersonFill color="gray" />
          <span className="bannerTitle"> TO DO LIST</span>
        </a>

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
      </span>
      <ImageSlider />
      {/* <div className="container"> */}
      <img className="gym" src={gym} alt="gym" />
      <div className="container_text">헬린이 쇼핑몰이란</div>
      <div className="container_main">
        운동을 이제 막 시작한 사람을 일컫는 말로, 헬린이들을 위한 쇼핑몰입니다.
        <br />
        투두리스트부터 운동기록까지 쇼핑몰 뿐 아니라 다양한 기능으로 헬린이들의
        운동을 응원합니다.
      </div>
      <img className="banner_logo" src={banner_logo} alt="banner_logo" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <img className="banner_all" src={banner_all} alt="banner_all" />
    </div>
  );
}