import React from 'react';
import './Cmain.css';
function Cmain() {
    return (
        <div className="Cmain">
            
        <div className="cmain_main">
            <div className="cmain_search">
                <h1>광고</h1>
                <div>
            <input className="cmain_input" placeholder='검색하실것이 있나요?'/>
            <button className="cmain_button">검색</button></div>
           
            </div>
            <div className="cmain_crud">
            글 목록
        </div>
        </div>
        
        
        </div>
    );
}

export default Cmain;