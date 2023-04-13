import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { FinanceOverviewPage } from "./pages/FinanceOverviewPage/FinanceOverviewPage";
import { EducareForSchools } from "./pages/EducareForSchools/EducareForSchools";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="finance-overview" element={<FinanceOverviewPage />} />
        <Route path="educare-schools" element={<EducareForSchools />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
