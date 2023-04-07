import React from 'react';
import './Aids.css';
import Belt from "./Belt";
import {Link,Route,Routes} from "react-router-dom";
import Mat from './Mat';
import Roller from './Roller';
import Strap from './Strap';
import Aidsmain from './Aidsmain';
const Aids=()=>{
   
    return (
        <div className="Aids">
            <div className="rap_head">
            
        
            <div className="rap_hr"></div>
            <div className="rap_header"><h1>-운동 보조 기구-</h1></div>
            <ul>
                <Link to="strap"><li className="line">스트랩</li></Link>
                <Link to="mat"><li className="line">요가 매트</li></Link>
                <Link to="roller"><li className="line">폼 롤러</li></Link>
                <Link to="belt"><li >벨트</li></Link>
               
            </ul>
            <div className="rap_select">
            <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
            </select>
            </div>
            </div>
           <Routes>
           <Route path="/" element={<Aidsmain/>}></Route>
                <Route path="strap" element={<Strap/>}></Route>
                <Route path="mat" element={<Mat/>}></Route>
                <Route path="roller" element={<Roller/>}></Route>
                <Route path="belt" element={<Belt/>}></Route>
            </Routes>

         
        </div>
    );
}

export default Aids;