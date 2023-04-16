import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Products from "./Products/Products";
import Community from "./Community/Community";
import MyPage from "./Todo/MyPage";
import Signup from "./Signup";
import TodoList from "./Todo/Todos";
import Cart from "./Cart";

export default function App() {
  return (
    <div>
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
        </Routes>
      </Router>
    </div>
  );
}
