import React from 'react';
import './Productsmain.css';
import advertisement from '../img/showingmallad.jpg';
function Productsmain() {
    return (
        <div className="Productsmain">
            <div className="advertisement">
                <img src={advertisement} alt="advertisement"/>
                <h1>BEST</h1>
                <div className="main_best"> 
                <div className="main_bestscroll">                
                <div className="main_best1">
                    <div className="main_img1"></div>
                    <div className="main_text1"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best2">
                <div className="main_img2"></div>
                    <div className="main_text2"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best3">
                <div className="main_img3"></div>
                    <div className="main_text3"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best4">
                <div className="main_img4"></div>
                    <div className="main_text4"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best5">
                <div className="main_img5"></div>
                    <div className="main_text5"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best5">
                <div className="main_img5"></div>
                    <div className="main_text5"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
                <div className="main_best5">
                <div className="main_img5"></div>
                    <div className="main_text5"><h2>상품 이름</h2> 가격:45121원</div>
                </div>
               
                </div>

                </div>
                <div className="prototype"></div>
                <h1>New</h1>
                <div className="main_new">
                    <div className="main_newscroll">
                        <div className="main_new1">
                            <div className="new_img1"></div>
                            <div className="new_text1"><h2>상품 이름</h2> 가격:45121원</div>
                        </div>
                        <div className="main_new2">
                        <div className="new_img2"></div>
                            <div className="new_text2"><h2>상품 이름</h2> 가격:45121원</div>
                        </div>
                        <div className="main_new3">
                        <div className="new_img3"></div>
                            <div className="new_text3"><h2>상품 이름</h2> 가격:45121원</div>
                        </div>
                        <div className="main_new4">
                        <div className="new_img4"></div>
                            <div className="new_text4"><h2>상품 이름</h2> 가격:45121원</div>
                        </div>
                        <div className="main_new5">
                        <div className="new_img5"></div>
                            <div className="new_text5"><h2>상품 이름</h2> 가격:45121원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productsmain;