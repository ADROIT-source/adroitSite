import React, { useState, useEffect, useRef } from "react";
import "../../style/main/hero.css";

import ReactPlayer from 'react-player';

import { ArrowRight, Play, Zap, Shield, Cpu, Sparkles } from "lucide-react";
import AnimatedCounter from "../../animations/AnimatedCounter";
import FadeInSection from "../../animations/ScrollFadeInSection";

import HeroSectionImage1 from "../../assets/images/HeroSection1.png";
import HeroSectionImage2 from "../../assets/images/HeroSection3.png";
import HeroSectionImage3 from "../../assets/images/HeroSection2.png";
import HeroSectionVideo1 from "../../assets/video/video.mp4";

const HeroSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the popup to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div id="hero" className="HeroSection">
      {isPopupOpen && <div className="HeroSection_overlay"></div>}
      <div className={`HeroSection_popUp ${isPopupOpen ? 'open' : ''}`} ref={popupRef}>
        <ReactPlayer 
          src={HeroSectionVideo1} 
          controls 
          width="100%" 
          height="100%" 
          playing={isPopupOpen} // Control playback based on popup state
        />
      </div>
      <div className="HeroSection_text">
        <FadeInSection
          direction="up"
          duration={800}
          className="HeroSection_text_wrap"
        >
          <div className="title_tag flex-center">
            <Sparkles size={18} color="white" strokeWidth={2} />
            <span>혁신적인 로봇 기술 선도 기업</span>
          </div>
          <h1>From Anything</h1>
          <h1>To Everything</h1>
          <p>
            최고의 기술력과 신뢰를 바탕으로 완벽한 자동화를 실현합니다.
            <br />
            맞춤형 로봇 솔루션으로 고객의 성공을 함께 만들어갑니다.
          </p>
          <div className="HeroSection_button">
            <button
              className="product_button flex-center"
              onClick={() => {
                const element = document.getElementById("product2");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>기술 둘러보기</span>
              <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
            </button>
            <button className="video_button flex-center" onClick={togglePopup}>
              <Play size={16} className="play_icon" />
              <span>영상 보기</span>
            </button>
          </div>

          {/* <ul className="HeroSection_card">
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Zap size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={20} suffix="+" fontSize="24px" />
              <span>업계경험</span>
            </li>
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Shield size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={32} suffix="+" fontSize="24px" />
              <span>완료된 프로젝트</span>
            </li>
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Cpu size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={9} suffix="+" fontSize="24px" />
              <span>보유기술</span>
            </li>
          </ul> */}
          {/* <ul className="HeroSection_tag">
            <li className="flex-center">
              <div className="circle"></div>
              <span>기술 전문성</span>
            </li>
            <li className="flex-center">
              <div className="circle"></div>
              <span>고객 만족</span>
            </li>
            <li className="flex-center">
              <div className="circle"></div>
              <span>혁신</span>
            </li>
          </ul> */}
        </FadeInSection>
      </div>
      <div className="HeroSection_image_wrap">
        <div className="Hero_dotted1"></div>
        <div className="HeroSection_image1">
          <img src={HeroSectionImage1} alt="" />
        </div>
        <div className="HeroSection_image2">
          <img src={HeroSectionImage2} alt="" />
        </div>
        <div className="HeroSection_image3">
          <img src={HeroSectionImage3} alt="" />
        </div>
        <div className="Hero_dotted2"></div>
        <div className="Hero_dotted3"></div>
      </div>
    </div>
  );
};

export default HeroSection;