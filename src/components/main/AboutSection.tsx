import React from "react";
import "../../style/main/about.css";

import { Shell, Shield, Target, Zap, Users } from "lucide-react";

import AboutSectionImage1 from "../../assets/images/AboutSection_image1.jpg";
import AboutSectionImage2 from "../../assets/images/AboutSection_image2.jpg";

import FadeInSection from "../ScrollFadeInSection";

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="AboutSection">
      <div className="AboutSection_text">
        <FadeInSection direction="up" duration={800}>
          <div className="title_tag flex-center">
            <Shell size={18} color="white" strokeWidth={2} />
            <span>회사소개</span>
          </div>
          <h1>혁신적인 로봇 기술로</h1>
          <h1>미래를 선도합니다</h1>
          <p>20년간의 로봇 기술 개발 경험을 바탕으로</p>
          <p>우리는 산업용 로봇팔과 자동화 솔루션 분야의 선두주자입니다.</p>
          <p>
            ABB와 같은 글로벌 기업들과 어깨를 나란히 하며 한국의 제조업 혁신을
            이끌어가고 있습니다.
          </p>
        </FadeInSection>
        <FadeInSection direction="up" duration={800}>
          <ul className="AboutSection_card">
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Shield size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>안정성</p>
              <span>
                99.9% 가동률과 최고 수준의 안전 기준을 충족하는 로봇 시스템
              </span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Target size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>정밀성</p>
              <span>마이크로미터 단위의 정밀도로 완벽한 품질 보장</span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Zap size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>효율성</p>
              <span>기존 대비 300% 향상된 생산성과 에너지 효율</span>
            </li>
            <li>
              <div className="AboutSection_card_icon flex-center">
                <Users size={24} color="#1e5ef3" strokeWidth={2} />
              </div>
              <p>지원</p>
              <span>24시간 기술 지원과 맞춤형 솔루션 제공</span>
            </li>
          </ul>
        </FadeInSection>
      </div>
      <div className="AboutSection_image_wrap flex-center">
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
