import './Products.css';
 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
 import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
 import logo from '../img/logo.png';

import {useState} from "react";
import {Link} from 'react-router-dom';
import Productsmanentire from './Productsmanentire';
import Productsmantop from './Productsmantop';
import Productsmanpants from './Productsmanpants';
import Productsmanouter from './Productsmanouter';
import Productsmanset from './Productsmanset';
 import {Routes,Route} from 'react-router-dom';
import Productsmain from './Productsmain';

import Wentire from './Wentire';
import Wleggings from './Wleggings';
import Wjogger from './Wjogger';
import Wpants from './Wpants';
import Wtop from './Wtop';
import Wouter from './Wouter';
import Aids from './Aids';


 function Products(){
  const [isOpen,setMenu]=useState(false);
  const[isOpe,setMen]=useState(false);
const toggleMenu =()=>{
  setMenu(isOpen=>!isOpen);
};
const toggleMen =()=>{
  setMen(isOpe=>!isOpe);
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
          <Link to ="/Cart"  style={{ textDecoration: "none" ,color:"black"}}><FontAwesomeIcon icon={faBasketShopping} size="2x"/></Link>
          <Link to="/Login" style={{ textDecoration: "none" ,color:"black"}}><div>LOGIN</div></Link>
          <Link to="/Signup" style={{ textDecoration: "none" ,color:"black"}}><div>SIGN UP</div></Link>
          
          </div>
          </div>
    <aside className="aside_menu">
    <Link to="/Products" style={{ textDecoration: "none" }}><h1 className="main_main">메인으로</h1></Link>
            <div>
            <h3 className="main_man" onClick={()=>toggleMenu()}>남성의류</h3>
            <ul className={isOpen ? "show-menu":"hide-menu"}>
            <Link to ="manentire" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">전체</li></Link>
            <Link to ="mantop" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu2">상의</li></Link>
            <Link to ="manpants" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu3">하의</li></Link>
            <Link to ="manouter" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu4">아우터</li></Link>
            <Link to ="manset" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu5">세트</li></Link>
            </ul>
            </div>
            <div><h3 className="main_woman" onClick={()=>toggleMen()}>여성의류</h3>
            <ul className={isOpe?"show":"hide"}>
            <Link to ="wentire" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">전체</li></Link>
            <Link to ="wleggings" style={{ textDecoration: "none" ,color:"black"}}><li className="show2">레깅스</li></Link>
            <Link to ="wjogger" style={{ textDecoration: "none" ,color:"black"}}><li className="show3">조거팬츠</li></Link>
            <Link to ="wouter" style={{ textDecoration: "none" ,color:"black"}}><li className="show4">아우터</li></Link>
            <Link to ="wpants" style={{ textDecoration: "none" ,color:"black"}}><li className="show5">하의</li></Link>
            <Link to ="wtops" style={{ textDecoration: "none" ,color:"black"}}><li className="show6">상의</li></Link>
            
            </ul>
            </div>
            <div> <Link to ="Aids/strap" style={{ textDecoration: "none" ,color:"black"}}><h3 className="main_gym">보조기구</h3></Link>
          
            </div>
            
          </aside>
          <Routes>
          
          <Route path="/*" element={<Productsmain/>}></Route>    
        <Route path="manentire" element={<Productsmanentire/>}></Route>
        <Route path="mantop" element={<Productsmantop/>}></Route>
        <Route path="manpants" element={<Productsmanpants/>}></Route>
        <Route path="manouter" element={<Productsmanouter/>}></Route>
        <Route path="manset" element={<Productsmanset/>}></Route>

<Route path="wentire" element={<Wentire/>}></Route>
<Route path="wleggings" element={<Wleggings/>}></Route>
<Route path="wjogger" element={<Wjogger/>}></Route>
<Route path="wouter" element={<Wouter/>}></Route>
<Route path="wpants" element={<Wpants/>}></Route>
<Route path="Wtops" element={<Wtop/>}></Route>

<Route path="Aids/*" element={<Aids/>}></Route>


      </Routes>
    
      </div>
      
      

    );
   }

  
export default Products;

