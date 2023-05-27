import React from 'react';
// import dummy from './src/components/json-server/db.json';
function Manentiremap({products,setProducts}) {
    
    return (
        <div className="main_1">
    
         <img className="main1_img"  src={products.img}alt="img"/>
         <div className="main1_text"><h3>{products.name}</h3>
         가격:{setProducts.price}원
         </div>
         </div>
           
        
       
    );
}

export default Manentiremap;

 {/* {dummy.entires.map(e=>(
                <>
                <img className="main1_img"  src={e.img}alt="img"/>
                <div className="main1_text"><h3>{e.name}</h3>
                가격:{e.price}원
                </div>
                </>
            ))}; */}