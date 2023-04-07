import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import Icofont from "react-icofont";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element />
      </Routes>
    </>
  );
}

export default App;
