import React from "react";
import "../../style/main/hero.css";

import { ArrowRight, Play, Zap, Shield, Cpu, Sparkles } from "lucide-react";
import AnimatedCounter from "../../animations/AnimatedCounter";
import FadeInSection from "../../animations/ScrollFadeInSection";

import HeroSectionImage1 from "../../assets/images/HeroSection_image1.jpg";
import HeroSectionImage2 from "../../assets/images/HeroSection_image2.jpg";
import HeroSectionImage3 from "../../assets/images/HeroSection_image3.jpg";

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="HeroSection">
      <div className="HeroSection_text">
        <FadeInSection direction="up" duration={800}>
          <div className="title_tag flex-center">
            <Sparkles size={18} color="white" strokeWidth={2} />
            <span>혁신적인 로봇 기술 선도 기업</span>
          </div>
          <h1>미래를 만드는</h1>
          <h1>로봇 기술</h1>
          <p>첨단 로봇팔과 자동화 솔루션으로 제조업의 혁신을 이끌어갑니다.</p>
          <p>정밀하고 효율적인 로봇 기술로 생산성을 극대화하세요.</p>
          <div className="HeroSection_button">
            <button className="product_button flex-center">
              <span>제품 둘러보기</span>
              <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
            </button>
            <button className="video_button flex-center">
              <Play size={16} className="play_icon" />
              <span>영상 보기</span>
            </button>
          </div>

          <ul className="HeroSection_card">
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Zap size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={500} suffix="+" fontSize="24px" />
              <span>설치된 로봇</span>
            </li>
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Shield size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={80} suffix="%" fontSize="24px" />
              <span>가동률</span>
            </li>
            <li>
              <div className="HeroSection_card_icon flex-center">
                <Cpu size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <AnimatedCounter target={7} suffix="/24" fontSize="24px" />
              <span>지원 서비스</span>
            </li>
          </ul>
          <ul className="HeroSection_tag">
            <li className="flex-center">
              <div className="circle"></div>
              <span>무료 현장 컨설팅</span>
            </li>
            <li className="flex-center">
              <div className="circle"></div>
              <span>24개월 품질보증</span>
            </li>
            <li className="flex-center">
              <div className="circle"></div>
              <span>전국 A/S 네트워크</span>
            </li>
          </ul>
        </FadeInSection>
      </div>
      <div className="HeroSection_image_wrap flex-center">
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
