import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutSection from "../components/main/AboutSection";
import ContactSection from "../components/main/ContactSection";
import HeroSection from "../components/main/HeroSection";
import HistorySection from "../components/main/HistorySection";
import ProductsSection2 from "../components/main/ProductsSection2";
import QuestionSection from "../components/main/QuestionSection";
import RecyclonPlatformSection from "../components/main/RecyclonPlatformSection";
import Company from "../components/main/CompanySection";
import ProjectSection from "../components/main/ProjectSection";
import FooterSection2 from "../components/main/FooterSection2";

import Bar from "../components/bar/bar";

import "../style/main/main.css";
import "../App.css";
import "../style/responsive.css";

const Main: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).target) {
      const targetId = (location.state as any).target;
      const el = document.getElementById(targetId);
      if (el) {
        // 스크롤 위치로 이동
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="Main">
      <Bar />
      <HeroSection />
      <Company />
      <AboutSection />
      <ProductsSection2 />
      <RecyclonPlatformSection />
      <ProjectSection />
      <QuestionSection />
      <HistorySection />
      {/* <ContactSection /> */}
      <FooterSection2 />
    </div>
  );
};

export default Main;
