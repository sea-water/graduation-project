import React from 'react';
import './Strap.css';
import Rmain from "./Rmain";

const Strap=()=>{
    const names=[["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231]];
    const namelist=names.map((v)=>(<Rmain name={v[0]} price={v[1]}/>));
    return (
        <div className="Strap">
            <div className="rap_head">
            
        
            <div className="rap_hr"></div>
            <div className="rap_header"><h1>-운동 보조 기구-</h1></div>
            <ul>
                <li className="line">스트랩</li>
                <li className="line">요가 매트</li>
                <li className="line">폼 롤러</li>
                <li >벨트</li>
               
            </ul>
            <div className="rap_select">
            <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
            </select>
            </div>
            </div>
            <div className="Rap_main">
           {namelist}
           </div>
        </div>
    );
}

export default Strap;