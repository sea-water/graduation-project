import './Products.css';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
 import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
 import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
 import logo from '../images/logo.png';
 import React,{useState} from "react";
import {Link} from 'react-router-dom';
 function Products(){
    const [isOpen,setMenu]=useState(false);
    const[isOpe,setMen]=useState(false);
    const[isOp,setMe]=useState(false);
  const toggleMenu =()=>{
    setMenu(isOpen=>!isOpen);
  };
  const toggleMen =()=>{
    setMen(isOpe=>!isOpe);
  };
  const toggleMe =()=>{
    setMe(isOpe=>!isOpe);
  };
  return (
       <div className="Products">
       <div className="s_header">
        <div className="s_logo">
        <FontAwesomeIcon icon={faBars} size="2x"/>
        <Link to="/">
         <img src={logo} alt="logo"/>
         </Link> 
        </div>
          <div className="s_input">
          <input placeholder="원하시는 상품을 검색해 보세요"/> <button> <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /> </button>   
          </div>  
          <div className="s_login">  
          <FontAwesomeIcon icon={faBasketShopping} size="2x"/>
          <Link to="/Login"><div>로그인</div></Link>
          <Link to="/Signup"><div>회원가입</div></Link>
          
          </div>
          </div>
          <div className="mainpage">
          <aside className="aside_menu">
            <div>
            <h2 className="main_man">남성 의류
            <button className="man_button" onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faChevronRight} /></button></h2>
            <ul className={isOpen ? "show-menu":"hide-menu"}>
            <li>전체</li>
            <li>상의</li>
            <li>하의</li>
            <li>아우터</li>
            <li>세트</li>
            </ul>
            </div>
            <div><h2 className="main_woman">여성 의류
            <button className="woman_button" onClick={()=>toggleMen()}><FontAwesomeIcon icon={faChevronRight} /></button></h2>
            <ul className={isOpe?"show":"hide"}>
            <li>전체</li>
            <li>레깅스</li>
            <li>조거팬츠</li>
            <li>티셔츠</li>
            <li>아우터</li>
            <li>하의</li>
            <li>상의</li>
            <li>운동 별 추천</li>
            </ul>
            </div>
            <div><h2 className="main_gym">운동 보조 기구
            <button className="gym_button" onClick={()=>toggleMe()}><FontAwesomeIcon icon={faChevronRight} /></button></h2>
            <ul className={isOp?"show_3":"hide_3"}>
            <li>스트랩</li>
            <li>마사지</li>
            <li>요가 매트</li>
            <li>폼 롤러</li>
            <li>벨트</li>
            
            </ul>
            </div>
            
          </aside>
          <div className="shopping_main">
            <div className="shopping_1">
  <div className="main_1">
    <div className="main1_img"></div>
    <div className="main1_text"><h3>손목 보호대</h3>
    가격:56632원
    </div>
    
  </div>
  <div className="main_2">
  <div className="main2_img"></div>
    <div className="main2_text"><h3>마사지 싱글 볼</h3>
    가격:56632원</div>
  </div>
  <div className="main_3">
  <div className="main3_img"></div>
    <div className="main3_text"><h3>요가 매트</h3>
    가격:56632원</div>
  </div>
  <div className="main_4">
  <div className="main4_img"></div>
    <div className="main4_text"><h3>요가 매트</h3>
    가격:56632원</div>
  </div>
  </div>
  
  <div className="shopping_2">
  <div className="main_5"></div>
  <div className="main_6"></div>
  <div className="main_7"></div>
  <div className="main_8"></div>
  </div>
  
  
  <div className="shopping_3">
  <div className="main_9"></div>
  <div className="main_10"></div>
  <div className="main_11"></div>
  <div className="main_12"></div>
  </div>
          </div>
          </div>
         
      </div>
 
    );
   }

  
export default Products;

