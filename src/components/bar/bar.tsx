import React, { useState, useEffect } from "react";
import '../../style/bar/bar.css'
import { MoveRight } from 'lucide-react';
import LogoImage from '../../assets/images/logo.png'

const Bar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`Bar ${scrolled ? "shadow" : ""}`}>
        <div className="logo flex-center">
            <img src={LogoImage} alt="로고 이미지" />
        </div>
        <ul className="bar_menu flex-center">
            <li onClick={() => scrollToSection('hero')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('product')}>Product</li>
            <li onClick={() => scrollToSection('history')}>History</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <div className="contact_us flex-center">
            <button className="contact_us_button flex-center" onClick={() => scrollToSection('contact')}>
              <span>문의하기</span>
              <MoveRight color="white" strokeWidth={1} className="left_icon" />
            </button>
        </div>
    </div>
  );
};

export default Bar;
