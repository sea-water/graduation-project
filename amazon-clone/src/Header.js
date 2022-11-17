import React from "react";
import "./Header.css";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header_logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <FiSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요!</span>
          <span className="header_optionLineTwo">로그인하기</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">...</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <FiShoppingBag />
            <span className="header_optionLineTwoHeader_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
