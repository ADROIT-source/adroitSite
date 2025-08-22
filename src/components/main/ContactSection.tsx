import React from "react";
import "../../style/main/contact.css";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

import FadeInSection from "../../animations/ScrollFadeInSection";

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="ContactSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center"
      >
        <h1>문의하기</h1>
        <p className="contact_desc">
          로봇 자동화 솔루션에 대한 궁금한 점이 있으시면 언제든지 연락주세요.
        </p>
        <p className="contact_desc">
          전문 엔지니어가 맞춤형 상담을 제공해드립니다.
        </p>
      </FadeInSection>
      <FadeInSection
        direction="up"
        duration={800}
        className="ContactSection_card_wrap"
      >
        <ul className="ContactSection_info">
          <li>
            <div className="ContactSection_icon flex-center">
              <MapPin color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>본사 위치</p>
              <p>서울특별시 강남구 테헤란로 123</p>
              <span>로봇 기술 센터 10층</span>
            </div>
          </li>
          <li>
            <div className="ContactSection_icon flex-center">
              <Phone color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>전화 문의</p>
              <p>02-1234-5678</p>
              <span>평일 09:00 - 18:00</span>
            </div>
          </li>
          <li>
            <div className="ContactSection_icon flex-center">
              <Mail color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>이메일</p>
              <p>info@roboticorp.com</p>
              <span>24시간 접수 가능</span>
            </div>
          </li>
          <li>
            <div className="ContactSection_icon flex-center">
              <Clock color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>영업 시간</p>
              <p>월-금 09:00 - 18:00</p>
              <span>토요일 09:00 - 13:00</span>
            </div>
          </li>
        </ul>
        <div className="ContactSection_submit_wrap">
          <div className="ContactSection_submit">
            <p>상담 신청</p>
            <ul className="contactSection_user_info">
              <li className="user_company_name">
                <span>회사명</span>
                <input type="text" />
              </li>
              <li className="user_name">
                <span>담당자명</span>
                <input type="text" />
              </li>
            </ul>
            <ul className="user_contact_info">
              <li className="user_email">
                <span>이메일</span>
                <input type="text" />
              </li>
              <li className="user_phone_number">
                <span>연락처</span>
                <input type="text" />
              </li>
            </ul>
            <li className="contact_interest_product">
              <span>관심 제품</span>
              <input type="text" />
            </li>
            <li className="Inquiry_details">
              <span>문의 내용</span>
              <textarea></textarea>
            </li>
            <div className="contact_chectbox">
              <input type="checkbox" />
              <span>개인정보 활용 동의합니다.</span>
            </div>
            <button className="contact_button">상담 신청하기</button>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ContactSection;
