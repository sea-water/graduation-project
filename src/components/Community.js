import React from "react";
import './Community.css';
import logo from './img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Link,Route,Routes} from 'react-router-dom';
import Cnews from "./Cnews";
import Cbest from "./Cbest";
import Cinformation from "./Cinformation";
import Cplatform from "./Cplatform";
import Cmain from "./Cmain";
export default function Community() {
  return <div className="Community">
    <div className="c_header">
      <div className="c_headerleft">
      <FontAwesomeIcon icon={faBars} size="2x"/>
      <Link to="/">
        <img className="c_headerlogo" src={logo} alt="logo"/>
        </Link>
      </div>
      <div className="c_headercenter">
      <div><Link to="/Community"><h2>메인</h2></Link></div>
        <div><Link to="Cnews"><h2>뉴스</h2></Link></div>
        <div><Link to="Cbest"><h2>베스트</h2></Link></div>
        <div><Link to="Cinformation"><h2>정보</h2></Link></div>
        <div><Link to="Cplatform"><h2>플랫폼</h2></Link></div>
        
      </div>
      <div className="c_headerright">
        <input className="c_headerinput" placeholder="무엇이 궁금한가요?"/>
        <button className="c_headerbutton"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
      </div>
    </div>
    <Routes>
    <Route path="/" element={<Cmain/>}></Route>    
        <Route path="Cnews" element={<Cnews/>}></Route>
        <Route path="Cbest" element={<Cbest/>}></Route>
        <Route path="Cinformation" element={<Cinformation/>}></Route>
        <Route path="Cplatform" element={<Cplatform/>}></Route>
      </Routes>
  </div>;
}
