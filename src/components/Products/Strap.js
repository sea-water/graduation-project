import React from 'react';
import Rmain from "./Rmain";
function Strap(props) {
    const names=[["이름1",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231],["이름",1231]];
    const namelist=names.map((v)=>(<Rmain name={v[0]} price={v[1]}/>));
    return (
        <div className="Rap_main">
           {namelist}
        </div>
    );
}

export default Strap;