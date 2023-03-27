import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products/Products";
import Community from "./components/Community";
import Main from "./components/Main";
import MyPage from "./components/MyPage";
import Signup from "./components/Signup";


export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/Products/*" element={<Products/>}></Route>
          <Route path="/Community/*" element={<Community />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
     
    </Router>
  );
}
        

/* <Link to="/">
          <div className="banner">
            <img
              className="bannerLogo"
              src="https://cdn-icons-png.flaticon.com/512/4729/4729230.png"
              width="50px"
              height="50px"
              alt="logo"
            />
          </div>
        </Link>  */