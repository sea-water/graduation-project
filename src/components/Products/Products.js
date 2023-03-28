import './Products.css';
 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
 import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
 import logo from '../img/logo.png';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from 'react-router-dom';
import Productsmanentire from './Productsmanentire';
import Productsmantop from './Productsmantop';
import Productsmanpants from './Productsmanpants';
import Productsmanouter from './Productsmanouter';
import Productsmanset from './Productsmanset';
 import {Routes,Route} from 'react-router-dom';
import Productsmain from './Productsmain';
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
    <div className="Sheader">
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
    <aside className="aside_menu">
    <Link to="/Products"><h2 className="main_main">메인
  <button className="main_button"><FontAwesomeIcon icon={faChevronRight} /></button></h2></Link>
            <div>
            <h2 className="main_man">남성 의류
            <button className="man_button" onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faChevronRight} /></button></h2>
            <ul className={isOpen ? "show-menu":"hide-menu"}>
     
         
            <Link to ="manentire"><li>전체</li></Link>
            <Link to ="mantop"><li>상의</li></Link>
            <Link to ="manpants"><li>하의</li></Link>
            <Link to ="manouter"><li>아우터</li></Link>
            <Link to ="manset"><li>세트</li></Link>
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
          <Routes>
          
          <Route path="/*" element={<Productsmain/>}></Route>    
        <Route path="manentire" element={<Productsmanentire/>}></Route>
        <Route path="mantop" element={<Productsmantop/>}></Route>
        <Route path="manpants" element={<Productsmanpants/>}></Route>
        <Route path="manouter" element={<Productsmanouter/>}></Route>
        <Route path="manset" element={<Productsmanset/>}></Route>
      </Routes>
    
      </div>
      
      

    );
   }

  
export default Products;

