import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { EducareForBusiness } from "./pages/EducareForBusiness/EducareForBusiness";
import { EducareForSchools } from "./pages/EducareForSchools/EducareForSchools";
import ScrollToTop from "./components/scrollToTop";
import EducarePackages from "./pages/EducarePackages/EducarePackages";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="educare-business" element={<EducareForBusiness />} />
        <Route path="educare-schools" element={<EducareForSchools />} />
        <Route path="educare-packages" element={<EducarePackages />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
