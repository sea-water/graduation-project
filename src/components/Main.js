import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "./Main.css";

const Main = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg?crop=0.896xw:0.808xh;0.0374xw,0.115xh&resize=1200:*",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
    </Slide>
  );
};

export default Main;
