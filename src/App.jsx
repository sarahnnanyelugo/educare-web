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
import Pastoral from "./pages/PastoralPage/PastoralPage";
import MedicalsPage from "./pages/MedicalsPage/MedicalsPage";
import EClassroomPage from "./pages/EClassroomPage/EClassroomPage";
import { HRMPage } from "./pages/HRMPage/HRMPage";
import EducareSchoolPackages from "./pages/EducareSchoolPackages/EducareSchoolPackages";
import { FinancePage } from "./pages/FinancePage/FInancePage";
import MailPage from "./pages/MailPage/MailPage";
import VotingSystem from "./pages/VotingSystem/VotingSystem";
import ContactPage from "./pages/ContactPage/ContactPage";
import Top from "./assets/images/top2.png";

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
        <Route
          path="educare-school-packages"
          element={<EducareSchoolPackages />}
        />

        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="pastoral" element={<Pastoral />} />
        <Route path="medicals" element={<MedicalsPage />} />
        <Route path="e-classroom" element={<EClassroomPage />} />
        <Route path="hrm" element={<HRMPage />} />
        <Route path="finance" element={<FinancePage />} />
        <Route path="mail-box" element={<MailPage />} />
        <Route path="voting-system" element={<VotingSystem />} />
        <Route path="contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
      <div className="top col-md-1 offset-md-11">
        {" "}
        <a href="#nav">
          {" "}
          <img src={Top} alt="Scholar" />
        </a>
      </div>
    </>
  );
}

export default App;
