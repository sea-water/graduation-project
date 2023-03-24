import React from "react";
import "./Header.css";
import "./Main.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { IoIosFitness } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Header() {
  const images = [
    "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg?crop=0.896xw:0.808xh;0.0374xw,0.115xh&resize=1200:*",
  ];
  return (
    <div>
      <span className="banner">
        <a className="bannerBtn" href="/Products">
          <IoIosFitness color="gray" />
          <span> PRODUCTS</span>
        </a>
        <a className="bannerBtn" href="/Community">
          <RiCommunityLine color="gray" />
          <span className="bannerTitle"> COMMUNITY</span>
        </a>
        <a className="bannerBtn" href="/MyPage">
          <BsFillPersonFill color="gray" />
          <span className="bannerTitle"> MY PAGE</span>
        </a>
        <a className="bannerBtn" href="/Cart">
          <AiOutlineShoppingCart color="gray" />
          <span className="bannerTitle"> CART (0)</span>
        </a>
        <a className="bannerBtn" href="/Login">
          <FiLogIn color="gray" />
          <span className="bannerTitle"> LOGIN</span>
        </a>
        <a className="bannerBtn" href="/Signup">
          <BsFillPersonPlusFill color="gray" />
          <span className="bannerTitle"> SIGN UP</span>
        </a>
      </span>
    </div>
  );
}
