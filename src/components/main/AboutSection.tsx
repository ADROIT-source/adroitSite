import React from "react";
import "../../style/main/about.css";

import { Shell, Shield, Target, Zap, Users } from "lucide-react";

import AboutSectionImage1 from "../../assets/images/about2.png";
import AboutSectionImage2 from "../../assets/images/about1.png";

import FadeInSection from "../../animations/ScrollFadeInSection";

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="AboutSection">
      <div className="AboutSection_text">
        <FadeInSection
          direction="up"
          duration={800}
          className="AboutSection_text_wrap"
        >
          <div className="title_tag flex-center">
            <Shell size={18} color="white" strokeWidth={2} />
            <span>회사소개</span>
          </div>
          <h1>로봇과 자동화 기술로</h1>
          <h1>산업의 미래를 혁신합니다</h1>
          <p>
            최고의 기술력과 신뢰를 바탕으로
            <br />
            Smart Factory · AX(AI Transformation) · DX(Digital Transformation)을
            실현하며
            <br />
            글로벌 경쟁력을 갖춘 로봇 통합 솔루션을 제공합니다.
          </p>
        </FadeInSection>
        <FadeInSection
          direction="up"
          duration={800}
          className="AboutSection_card_wrap"
        >
          <ul className="AboutSection_card">
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Shield size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>기술 전문성</p>
              <span>
                산업 자동화와 로봇 시스템 분야의
                <br />
                독보적인 기술력과 연구개발
              </span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Target size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>고객 만족</p>
              <span>
                수많은 프로젝트 경험을 바탕으로
                <br />
                최적의 맞춤형 솔루션 제공
              </span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Zap size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>혁신</p>
              <span>
                AI 비전 · OLP · AMR 등<br />
                차세대 스마트 자동화 기술 도입
              </span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Users size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>글로벌 경쟁력</p>
              <span>
                현대·기아 등 글로벌 기업과 협력하며
                <br />
                산업 현장의 혁신을 선도
              </span>
            </li>
          </ul>
        </FadeInSection>
      </div>
      <div className="AboutSection_image_wrap">
        <div className="About_dotted2"></div>
        <div className="AboutSection_image1">
          <img src={AboutSectionImage1} alt="이미지 1" />
        </div>
        <div className="AboutSection_image2">
          <img src={AboutSectionImage2} alt="이미지 1" />
        </div>
      </div>
      <div className="About_dotted1"></div>
    </div>
  );
};

export default AboutSection;
