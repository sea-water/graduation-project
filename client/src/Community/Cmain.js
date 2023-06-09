import { React, useState } from "react";
import logo_one from "../img/logo_one.png";
import logo_two from "../img/logo_two.png";
import logo_three from "../img/logo_three.png";
import "./Cmain.css";
import Cbest from "./Cbest";
import Cmain_map from "./Cmain_map";
import ad_left from "../img/ad_left.jpeg";
import ad_right from "../img/ad_right.jpeg";
import ad_4 from "../img/ad_4.jpg";
import { FiSearch } from "react-icons/fi";

function Cmain() {
  const names = [
    ["체중 감량", "신세경의 다이어트 비법", "이현우", logo_two],
    ["근력 강화", "헬린이들 이거보면서 운동하세요", "김해인", logo_three],
    ["체중 감량", "20kg 감량한 썰 푼다", "임욱", logo_two],
    ["식단 조절", "당뇨 환자의 식단 꿀팁", "권해수", logo_one],
    ["체중 감량", "20kg 감량한 썰 푼다", "임욱", logo_two],
    ["근력 강화", "헬린이들 이거보면서 운동하세요", "김해인", logo_three],
  ];

  const nameList = names.map((v) => (
    <Cmain_map name={v[0]} list={v[1]} writer={v[2]} logo={v[3]} />
  ));

  return (
    <div>
      <div className="ads">
        <img className="ad_left" src={ad_left} alt="ad_left" />
        <div className="community_contents">
          <img className="ad_4" src={ad_4} alt="ad_4" />
          {/* 검색창 */}
          <div className="search_container">
            <ul>
              <li>
                <a className="option_title" href="/#">
                  카테고리를 선택하세요
                </a>
                <ul className="options_container">
                  <li className="option_parent">
                    <a className="option">근력강화</a>
                  </li>
                  <li className="option_parent">
                    <a className="option">식단조절</a>
                  </li>
                  <li className="option_parent">
                    <a className="option">체중감량</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <input
                className="search_post_input"
                placeholder="무엇이 궁금하세요?"
              />
              <button>
                <FiSearch />
              </button>
            </div>
            <button className="btn_write">글쓰기</button>
          </div>
          {/* 검색창 끝 */}
          <hr />
          <div className="crud_main">
            <div className="crud_map">{nameList}</div>
          </div>
        </div>
        <img className="ad_right" src={ad_right} alt="ad_right" />
      </div>
      <div class="pagination-box">
        <a className="paging_btn">1</a>
        <a className="paging_btn">2</a>
        <a className="paging_btn">3</a>
        <a className="paging_btn">4</a>
      </div>
    </div>
  );
}

export default Cmain;
