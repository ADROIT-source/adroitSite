import React, { useState } from "react";
import "../../style/main/contact.css";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeInSection from "../../animations/ScrollFadeInSection";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // 입력값 변경 처리
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!formData.name || !formData.email || !formData.message) {
      alert("담당자명, 이메일, 문의내용은 필수입니다.");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("올바른 이메일을 입력해주세요.");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("메일 전송 성공!");
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("메일 전송 실패");
      }
    } catch (err) {
      console.error(err);
      alert("서버와 연결할 수 없습니다.");
    }
  };

  return (
    <div id="contact" className="ContactSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center ContactSection_text"
      >
        <h1>문의하기</h1>
        <p className="contact_desc">
          로봇 자동화 솔루션에 대한 궁금한 점이 있으시면 언제든지 연락주세요.<br />
          전문 엔지니어가 맞춤형 상담을 제공해드립니다.
        </p>
      </FadeInSection>

      <FadeInSection
        direction="up"
        duration={800}
        className="ContactSection_card_wrap"
      >
        {/* 회사 정보 카드 */}
        <ul className="ContactSection_info">
          <li>
            <div className="ContactSection_icon flex-center">
              <MapPin color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>본사 위치</p>
              <p>경기도시흥시경기과기대로270</p>
              <span>J동106호</span>
            </div>
          </li>
          <li>
            <div className="ContactSection_icon flex-center">
              <Phone color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>전화 문의</p>
              <p>070-8810-5612</p>
              <span>평일 09:00 - 18:00</span>
            </div>
          </li>
          <li>
            <div className="ContactSection_icon flex-center">
              <Mail color="#1e5ef3" size={18} />
            </div>
            <div className="ContactSection_info_text">
              <p>이메일</p>
              <p>adroit@adroit.co.kr</p>
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
              <span>토 ·일 휴무</span>
            </div>
          </li>
        </ul>

        {/* 상담 신청 폼 */}
        <div className="ContactSection_submit_wrap">
          <form className="ContactSection_submit" onSubmit={handleSubmit}>
            <p>상담 신청</p>

            <div className="contactSection_user_info">
              <div className="user_company_name">
                <label>회사명</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="user_name">
                <label>담당자명 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="user_contact_info">
              <div className="user_email">
                <label>이메일 *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user_phone_number">
                <label>연락처</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact_interest_product">
              <label>관심 서비스</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
              />
            </div>

            <div className="Inquiry_details">
              <label>문의 내용 *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact_chectbox">
              <span>※ 상담 신청 시 개인정보 활용에 동의합니다.</span>
            </div>

            <button type="submit" className="contact_button">
              상담 신청하기
            </button>
          </form>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ContactSection;
