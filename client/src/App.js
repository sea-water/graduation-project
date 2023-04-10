import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Products from "./Products/Products";
import Community from "./Community/Community";
import MyPage from "./Mypage/MyPage";
import Signup from "./Signup";
import MyCalendar from "./Mypage/MyCalendar";
import TodoList from "./Mypage/Todos";
import Cart from "./Cart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/Products/*" element={<Products />} />
        <Route path="/Community/*" element={<Community />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
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
