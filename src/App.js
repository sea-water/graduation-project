import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products/Products";
import Community from "./components/Community/Community";

import MyPage from "./components/Mypage/MyPage";
import Signup from "./components/Signup";
import MyCalendar from "./components/Mypage/MyCalendar";
import TodoList from "./components/Mypage/Todos";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/Products/*" element={<Products/>}/>
          <Route path="/Community/*" element={<Community />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/MyCalendar" element={<MyCalendar />} />
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