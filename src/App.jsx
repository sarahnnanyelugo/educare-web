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
import ScrollToTop from "./components/scrollToTop";
import EducarePackages from "./pages/EducarePackages/EducarePackages";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="finance-overview" element={<FinanceOverviewPage />} />
        <Route path="educare-schools" element={<EducareForSchools />} />
        <Route path="educare-packages" element={<EducarePackages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
