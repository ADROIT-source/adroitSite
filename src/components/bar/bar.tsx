import React, { useState, useEffect, useRef } from "react";
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
  "aritbot",
  "saladybot",
  "store",
  "lerobot",
];

const menuSections = ["hero", "about", "product2", "history", "saladybot", "aritbot", "lerobot"];

const Bar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  // /artibot 또는 /LeRobot 페이지인지 확인
  const isArtiBotPage = location.pathname === "/artibot" || location.pathname === "/LeRobot";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // URL 기반 페이지 우선 처리
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
      if (location.pathname === "/LeRobot") {
        setActiveSection("lerobot");
        return;
      }

      // 영역 기반 활성화
      let current = allSections[0];
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

      // 메뉴에 없는 섹션이면 가장 가까운 메뉴 섹션으로 조정
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

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        toggleButtonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
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
          {/* /artibot 페이지가 아닐 때의 메뉴 */}
          {!isArtiBotPage && (
            <>
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
                  setTimeout(() => {
                    const element = document.getElementById("aritbot");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Arti Bot
              </li>
            </>
          )}

          {/* /artibot 페이지일 때의 메뉴 */}
          {isArtiBotPage && (
            <>
              <li
                className={activeSection === "hero" ? "active" : ""}
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Adroit
              </li>
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
                  setTimeout(() => {
                    const element = document.getElementById("aritbot");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Arti Bot
              </li>
              <li
                className={activeSection === "lerobot" ? "active" : ""}
                onClick={() => {
                  navigate("/LeRobot");
                  setMenuOpen(false);
                }}
              >
                LeRobot
              </li>
            </>
          )}
        </ul>

        {/* 토글 메뉴 */}
        <ul ref={menuRef} className={`toggle_bar_menu ${menuOpen ? "open" : ""}`}>
          {!isArtiBotPage && (
            <>
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
                    const element = document.getElementById("top");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
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
                    const element = document.getElementById("aritbot");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Arti Bot
              </li>
            </>
          )}

          {isArtiBotPage && (
            <>
              <li
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Adroit
              </li>
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
                  setTimeout(() => {
                    const element = document.getElementById("aritbot");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Arti Bot
              </li>
              <li
                className={activeSection === "lerobot" ? "active" : ""}
                onClick={() => {
                  navigate("/LeRobot");
                  setMenuOpen(false);
                }}
              >
                LeRobot
              </li>
            </>
          )}

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
      <div ref={toggleButtonRef} className="toggle_menu_wrap" onClick={() => setMenuOpen(!menuOpen)}>
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