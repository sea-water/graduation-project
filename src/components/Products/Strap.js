import React from 'react';
import Rmain from "./Rmain";
function Strap(props) {
    const names=[["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231],["이름1","sdsd",1231]];
    const namelist=names.map((v)=>(<Rmain name={v[0]} number={v[1]} price={v[2]}/>));
    return (
        <div className="Rap_main">
           {namelist}
        </div>
    );
}

export default Strap;