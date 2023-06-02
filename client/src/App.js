import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Products from "./Products/Products";
import Community from "./Community/Community";
import Signup from "./Signup";
import Cart from "./Cart";
import Personal from "./Personal/Personal";
import MainPage from "./MainPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Personal" element={<Personal />} />
        </Routes>
      </Router>
    </div>
  );
}
