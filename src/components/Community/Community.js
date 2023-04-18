import React from "react";
import './Community.css';
import logo from '../img/logo.png';

import {FiMenu} from "react-icons/fi";
import {Link,Route,Routes} from 'react-router-dom';
import {FiSearch} from "react-icons/fi";
import Cmain from "./Cmain";
import Cplatfrom from "./Cplatfrom";
import Cinformation from "./Cinformation";
import Cbest from "./Cbest";
export default function Community() {

  return <div className="Community">
    
       <div className="a_logo">
        <FiMenu size="35"/>
       
        </div>
       
      <div className="a">
      
      
  <div className="c_header">
  <div className="c_left">
    <Link to="/" ><img  className="c_logo" src={logo} alt="logo"/></Link>
    </div>
  <div className="c_center">
  <Link to="/Community" style={{ textDecoration: "none" ,color:"black"}}><h1 className="c_center1">메인</h1></Link>
    <Link to="Cbest" style={{ textDecoration: "none" ,color:"black"}}><h1 className="c_center1">내 글</h1></Link>
    <Link to="/Products" style={{ textDecoration: "none" ,color:"black"}}><h1 className="c_center1">쇼핑몰</h1></Link>
    <Link to="/todolist" style={{ textDecoration: "none" ,color:"black"}}><h1 className="c_center1">투두</h1></Link>
    </div>
  <div className="c_right">
    <input className="c_input" placeholder="무엇이 궁금하세요?"/>
    <button className="c_button"><FiSearch/></button>
    </div>
    </div>
 
  </div>


<Routes>
          <Route path="/*" element={<Cmain/>} />
          <Route path="Cplatfrom" element={<Cplatfrom/>} />
          <Route path="Cinformation" element={<Cinformation/>} />
          <Route path="Cbest" element={<Cbest/>} />
        </Routes>


  </div>;
}
