import React from "react";
import "./Community.css";
import { Route, Routes } from "react-router-dom";
import Cmain from "./Cmain";
import Cbest from "./Cbest";
import Header from "../Header";

export default function Community() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Cmain />} />
        <Route path="Cbest" element={<Cbest />} />
      </Routes>
    </div>
  );
}
