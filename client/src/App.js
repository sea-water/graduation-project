import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products";
import Community from "./components/Community";
import MyPage from "./components/MyPage";
import Signup from "./components/Signup";
import TodoList from "./components/Todos";
import MyCalendar from "./components/MyCalendar";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/MyCalendar" element={<MyCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}
