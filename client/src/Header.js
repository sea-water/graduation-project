import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/main_logo.jpg";
import ImageSlider from "./ImageSlide";
import about_hl from "./img/about_hl.png";
import midBanner from "./img/banner.jpeg";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";

// const Header = () => {
// const navigate = useNavigate();
// const navigateTo = (path) => {
//   navigate(path);
// };

// const buttonData = [
//   { label: "PRODUCTS", path: "/Products" },
//   { label: "COMMUNITY", path: "/Community" },
//   { label: "TODO LIST", path: "/Todos" },
// ];

//   return (
//     <div className="top_banner">
//       <span className="banner">
//         <Link to="/">
//           <div>
//             <img className="bannerLogo" src={logo} alt="logo" />
//           </div>
//         </Link>
//         <div className="banner_btnItems">
//           <div className="left-buttons">
//             {buttonData.map((button) => (
//               <button
//                 className="bannerBtn"
//                 key={button.path}
//                 onClick={() => navigateTo(button.path)}
//               >
//                 {button.label}
//               </button>
//             ))}
//           </div>
//           <div className="right-buttons">
//             <button className="bannerBtn" onClick={() => navigateTo("/SignUp")}>
//               SIGN UP
//             </button>
//             <button className="bannerBtn" onClick={() => navigateTo("/LogIn")}>
//               LOG IN
//             </button>
//           </div>
//         </div>
//       </span>
//       <ImageSlider />
//       <img className="about_hl" src={about_hl} alt="about_hl" />
//       <img className="mid_banner" src={midBanner} alt="mid_banner" />
//       <div className="logos">
//         <img
//           className="logo_mean_left"
//           src={logo_mean_left}
//           alt="logo_meaning"
//         />
//         <img
//           className="logo_mean_right"
//           src={logo_mean_right}
//           alt="logo_meaning2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "TODO LIST", path: "/Todos" },
  ];

  const [leftLogoVisible, setLeftLogoVisible] = useState(false);
  const [rightLogoVisible, setRightLogoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftLogo = document.querySelector(".logo_mean_left");
      const rightLogo = document.querySelector(".logo_mean_right");

      // 스크롤 위치 가져오기
      const scrollPosition = window.scrollY;

      // 왼쪽 로고 애니메이션 처리
      if (leftLogo) {
        const logoMeanLeftOffset = leftLogo.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > logoMeanLeftOffset - windowHeight + 100) {
          setLeftLogoVisible(true);
        } else {
          setLeftLogoVisible(false);
        }
      }

      // 오른쪽 로고 애니메이션 처리
      if (rightLogo) {
        const logoMeanRightOffset = rightLogo.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > logoMeanRightOffset - windowHeight + 100) {
          setRightLogoVisible(true);
        } else {
          setRightLogoVisible(false);
        }
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top_banner">
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="banner_btnItems">
          <div className="left-buttons">
            {buttonData.map((button) => (
              <button
                className="bannerBtn"
                key={button.path}
                onClick={() => navigateTo(button.path)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="right-buttons">
            <button className="bannerBtn" onClick={() => navigateTo("/SignUp")}>
              SIGN UP
            </button>
            <button className="bannerBtn" onClick={() => navigateTo("/LogIn")}>
              LOG IN
            </button>
          </div>
        </div>
      </span>
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <img
          className={`logo_mean_left ${leftLogoVisible ? "visible" : ""}`}
          src={logo_mean_left}
          alt="logo_meaning"
        />
        <img
          className={`logo_mean_right ${rightLogoVisible ? "visible" : ""}`}
          src={logo_mean_right}
          alt="logo_meaning2"
        />
      </div>
    </div>
  );
};

export default Header;
