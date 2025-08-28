import React from "react";

import AboutSection from "../components/main/AboutSection";
import ContactSection from "../components/main/ContactSection";
import HeroSection from "../components/main/HeroSection";
import HistorySection from "../components/main/HistorySection";
import ProductsSection from "../components/main/ProductsSection";
import ProductsSection2 from "../components/main/ProductsSection2";
import TestimonialsSection from "../components/main/TestimonialsSection";
import QuestionSection from "../components/main/QuestionSection";
import Company from "../components/main/CompanySection";
import ProjectSection from "../components/main/ProjectSection";
import FooterSection from "../components/main/FooterSection";
// 바 메뉴

import Bar from "../components/bar/bar";

// 스타일

import "../style/main/main.css";
import "../App.css";
import "../style/responsive.css"

const Main: React.FC = () => {
  return (
    <div className="Main">
      <Bar />
      <HeroSection />
      <Company />
      <AboutSection />
      {/* <ProductsSection2 /> */}
      <ProjectSection />
      {/* <ProductsSection /> */}
      {/* <TestimonialsSection /> */}
      <HistorySection />
      <QuestionSection />
      <ContactSection />
      {/* <FooterSection /> */}
    </div>
  );
};

export default Main;
