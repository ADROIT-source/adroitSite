import React from "react";
import "../../style/main/testimonials.css";
import "../../style/main/main.css";

import { Quote, Star } from "lucide-react";

import FadeInSection from "../../animations/ScrollFadeInSection";

import TestUserIcon1 from "../../assets/images/test_user_icon1.jpg";
import TestUserIcon2 from "../../assets/images/test_user_icon2.jpg";
import TestUserIcon3 from "../../assets/images/test_user_icon3.jpg";

const TestimonialsSection: React.FC = () => {
  return (
    <div id="testimonials" className="TestimonialsSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center TestimonialsSection_text"
      >
        <div className="title_tag flex-center">
          <Quote size={18} color="white" strokeWidth={2} />
          <span>고객 후기</span>
        </div>
        <h1>고객이 전하는</h1>
        <h1>생생한 경험담</h1>
        <p>
          실제 도입 기업들의 솔직한 후기를 통해 우리 로봇 기술의 진가를 확인해
          보세요
        </p>
      </FadeInSection>
      <FadeInSection
        direction="up"
        duration={800}
        className="TestimonialsSection_card"
      >
        <li>
          <div className="scope">
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} />
          </div>
          <p>
            로봇팔 도입 후 생산 효율이 3배 증가했습니다. 특히 정밀도와 안정성이
            뛰어나 24시간 무정지 생산이 가능해졌어요.
          </p>
          <div className="TestimonialsSection_user">
            <div className="user_icon">
              <img src={TestUserIcon1} alt="사용자이미지" />
            </div>
            <div className="user_info">
              <p>일론 머스크</p>
              <p>CEO</p>
              <p>테슬라</p>
            </div>
          </div>
        </li>
        <li>
          <div className="scope">
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} />
          </div>
          <p>
            로봇팔 도입 후 생산 효율이 3배 증가했습니다. 특히 정밀도와 안정성이
            뛰어나 24시간 무정지 생산이 가능해졌어요.
          </p>
          <div className="TestimonialsSection_user">
            <div className="user_icon">
              <img src={TestUserIcon2} alt="사용자이미지" />
            </div>
            <div className="user_info">
              <p>스티브 잡스</p>
              <p>CEO</p>
              <p>APPLE</p>
            </div>
          </div>
        </li>
        <li>
          <div className="scope">
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
            <Star size={18} color="#FFEB3B" strokeWidth={1} fill="#FFEB3B" />
          </div>
          <p>
            로봇팔 도입 후 생산 효율이 3배 증가했습니다. 특히 정밀도와 안정성이
            뛰어나 24시간 무정지 생산이 가능해졌어요.
          </p>
          <div className="TestimonialsSection_user">
            <div className="user_icon">
              <img src={TestUserIcon3} alt="사용자이미지" />
            </div>
            <div className="user_info">
              <p>빌 게이츠</p>
              <p>CEO</p>
              <p>마이크로 소프트</p>
            </div>
          </div>
        </li>
      </FadeInSection>
    </div>
  );
};

export default TestimonialsSection;
