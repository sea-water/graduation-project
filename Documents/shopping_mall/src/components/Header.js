import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { IoIosFitness } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <img
        className="bannerImg"
        src="https://cdn-icons-png.flaticon.com/512/4729/4729230.png"
        width="50px"
        height="50px"
        alt="logo"
      />
      <span className="banner">
        <button className="bannerBtn">
          <IoIosFitness color="gray" />
          <span> PRODUCTS</span>
        </button>
        <button className="bannerBtn">
          <RiCommunityLine color="gray" />
          <span> COMMUNITY</span>
        </button>
        <button className="bannerBtn">
          <BsFillPersonFill color="gray" />
          <span> MY PAGE</span>
        </button>
        <button className="bannerBtn">
          <AiOutlineShoppingCart color="gray" />
          CART (0)
        </button>
        <button className="bannerBtn">
          <FiLogIn color="gray" /> LOGIN
        </button>
        <button className="bannerBtn">
          <BsFillPersonPlusFill color="gray" />
          SIGN UP
        </button>
      </span>
    </div>
  );
}
