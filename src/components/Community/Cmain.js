import {React} from 'react';
import './Cmain.css';
import Cmain_map from './Cmain_map';
import {Link,Route,Routes} from "react-router-dom";
// import loone from '../img/loone.png';
// import lotwo from '../img/lotwo.png';
// import lothree from '../img/lothree.png';
import Cbest from './Cbest';
function Cmain() {

    
    
  

    return (
        <div className="Cmain">
            
        <div className="cmain_main">
      
            <div className="cmain_ab">
            <div className="cmain_a"/>
            </div>
            
            <div className="cmain_crud">
                
                <div className="cmain_button">
                <Link to="/Community/Cbest" style={{ textDecoration: "none" ,color:"black"}}>
            <button className="cmain_bt">글 작성</button>
          
            </Link>
            </div>
            
            <hr/>
            <div className="crud_main">
             <div className="crud_map" >
                <Cmain_map/>
             </div>
             
            </div>
           
        </div>
        <div className="cmain_next"><button>이전</button>1 2 3 4 5<button>다음</button></div>
        </div>
        
        <Routes>
            <Route path="Cbest" element={<Cbest/>} />
            </Routes>
        
        </div>
    );
}

export default Cmain;