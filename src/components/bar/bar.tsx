import React, { useState, useEffect } from "react";
import "../../style/bar/bar.css";
import { MoveRight, AlignJustify, AlignLeft } from "lucide-react";
import LogoImage from "../../assets/images/logo1.png";

const allSections = [
  "hero",
  "company",
  "about",
  "product2",
  "project",
  // "testimonials",
  "history",
  "question",
  "contact",
];
const menuSections = ["hero", "about", "product2", "history", "contact"];

const Bar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      let current = "hero";

      for (let i = 0; i < allSections.length; i++) {
        const id = allSections[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = id;
            break;
          }
        }
      }

      if (!menuSections.includes(current)) {
        for (let i = allSections.indexOf(current); i >= 0; i--) {
          if (menuSections.includes(allSections[i])) {
            current = allSections[i];
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`Bar ${scrolled ? "shadow" : ""}`}>
      <div className="logo flex-center">
        <img src={LogoImage} alt="로고 이미지" />
      </div>

      <div className="bar_menu_wrap flex-center">
        <ul className="bar_menu">
          <li
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => scrollToSection("hero")}
          >
            Home
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className={activeSection === "product2" ? "active" : ""}
            onClick={() => scrollToSection("product2")}
          >
            Product
          </li>
          <li
            className={activeSection === "history" ? "active" : ""}
            onClick={() => scrollToSection("history")}
          >
            History
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
          <a href="/saladybot">Salad Bot</a>
        </ul>

        {/* 토글 메뉴 */}
        <ul className={`toggle_bar_menu ${menuOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("product2")}>Product</li>
          <li onClick={() => scrollToSection("history")}>History</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
          <a href="/saladybot">Salad Bot</a>
          <button
            className="toggle_contact_us_button"
            onClick={() => scrollToSection("contact")}
          >
            <span>문의하기</span>
            <MoveRight color="white" strokeWidth={1} className="left_icon" />
          </button>
        </ul>
      </div>

      <button
        className="contact_us_button"
        onClick={() => scrollToSection("contact")}
      >
        <span>문의하기</span>
        <MoveRight color="white" strokeWidth={1} className="left_icon" />
      </button>

      {/* 햄버거 버튼 */}
      <div
        className="toggle_menu_wrap"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <AlignLeft
            color="white"
            size={24}
            strokeWidth={1}
            className="toggle_menu_activate"
          />
        ) : (
          <AlignJustify
            color="white"
            size={24}
            strokeWidth={1}
            className="toggle_menu_deactivate"
          />
        )}
      </div>
    </div>
  );
};

export default Bar;
