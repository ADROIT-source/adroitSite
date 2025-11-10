import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/bar/bar.css";
import { MoveRight, AlignJustify, AlignLeft } from "lucide-react";
import LogoImage from "../../assets/images/logo1.png";

const allSections = [
  "hero",
  "company",
  "about",
  "product2",
  "recyclonplat",
  "project",
  "question",
  "history",
  "contact",
];
const menuSections = ["hero", "about", "product2", "history"];

const Bar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // saladybot 페이지라면 activeSection을 saladybot으로 고정
      if (location.pathname === "/saladybot") {
        setActiveSection("saladybot");
        return;
      }

      if (location.pathname === "/artibot") {
        setActiveSection("aritbot");
        return;
      }
       if (location.pathname === "/store") {
        setActiveSection("store");
        return;
      }

      // 새로고침 직후 맨 위에 있으면 hero 고정
      if (window.scrollY === 0) {
        setActiveSection("hero");
        return;
      }

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

    // 실행 즉시 초기화
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 특정 섹션으로 이동
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // 메인 페이지로 이동하면서 target 섹션을 state로 전달
      navigate("/", { state: { target: sectionId } });
      setMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`Bar ${scrolled ? "shadow" : ""}`}>
      <a href="/" className="logo flex-center">
        <img src={LogoImage} alt="로고 이미지" />
      </a>

      <div className="bar_menu_wrap flex-center">
        <ul className="bar_menu">
          <li
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => scrollToSection("hero")}
          >
            Adroit
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
          {/* <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li> */}
          <li
            className={activeSection === "saladybot" ? "active" : ""}
            onClick={() => {
              navigate("/saladybot");
              setMenuOpen(false);
            }}
          >
            Salady Bot
          </li>
          <li
            className={activeSection === "aritbot" ? "active" : ""}
            onClick={() => {
              navigate("/artibot");
              setMenuOpen(false);
            }}
          >
            Arti Bot
          </li>
        </ul>

        {/* 토글 메뉴 */}
        <ul className={`toggle_bar_menu ${menuOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("hero")}>Adroit</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("product2")}>Product</li>
          <li onClick={() => scrollToSection("history")}>History</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
          <li
            className={activeSection === "saladybot" ? "active" : ""}
            onClick={() => {
              navigate("/saladybot");
              setMenuOpen(false);
              setTimeout(() => {
                const element = document.getElementById("top"); // SaladyBot 페이지 최상단 id
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }, 100); // 렌더링 후 스크롤
            }}
          >
            Salady Bot
          </li>
          <li
            className={activeSection === "aritbot" ? "active" : ""}
            onClick={() => {
              navigate("/artibot");
              setMenuOpen(false);
              setTimeout(() => {
                const element = document.getElementById("top");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }, 100); // 렌더링 후 스크롤
            }}
          >
            Arti Bot
          </li>

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
      <div className="toggle_menu_wrap" onClick={() => setMenuOpen(!menuOpen)}>
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
