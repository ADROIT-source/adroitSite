import React from "react";
import "../../style/main/footer.css";

import LogoImage from "../../assets/images/logo.png";

import { MapPin, Phone, Mail, Youtube, Facebook } from "lucide-react";

const FooterSection: React.FC = () => {
  return (
    <div className="FooterSection">
      <div className="footer_info">
        <div className="footer_menu">
          <ul className="footer_contact">
            <div className="footer_logo">
              <img src={LogoImage} alt="하단 로고" />
            </div>
              <p>
                첨단 로봇 기술로 제조업의 혁신을 이끌어가는 선도 기업입니다.
                고품질의 로봇팔과 자동화 솔루션을 제공합니다.
              </p>
            <li className="test">
              <MapPin color="#1e5ef3" size={18} />
              <span>서울 특별시 강남구 테헤란로 123</span>
            </li>
            <li>
              <Phone color="#1e5ef3" size={18} />
              <span>02-1234-5678</span>
            </li>
            <li>
              <Mail color="#1e5ef3" size={18} />
              <span>info@gmail.com</span>
            </li>
          </ul>
          <ul>
            <p>빠른 링크</p>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">제품</a></li>
            <li><a href="#">서비스</a></li>
            <li><a href="#">기술지원</a></li>
            <li><a href="#">뉴스</a></li>
            <li><a href="#">채용</a></li>
          </ul>

          <ul>
            <p>제품</p>
            <li><a href="#">축 로봇팔</a></li>
            <li><a href="#">산업용 로봇</a></li>
            <li><a href="#">자동화 라인</a></li>
            <li><a href="#">협동 로봇</a></li>
            <li><a href="#">제어 시스템</a></li>
            <li><a href="#">맞춤 솔루션</a></li>
          </ul>

          <ul>
            <p>지원</p>
            <li><a href="#">기술 문서</a></li>
            <li><a href="#">설치 가이드</a></li>
            <li><a href="#">유지보수</a></li>
            <li><a href="#">교육 프로그램</a></li>
            <li><a href="#">온라인 지원</a></li>
            <li><a href="#">부품 주문</a></li>
          </ul>
        </div>
      </div>

      <div className="footer_copyright">
        <p>© 2025 ADROIT. All Right Reserved</p>
        <ul className="footer_sns_icon">
          <li className="flex-center">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <Youtube color="#1e5ef3" size={18} />
            </a>
          </li>
          <li className="flex-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook color="#1e5ef3" size={18} />
            </a>
          </li>
        </ul>
        <ul className="legal_links">
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">사이트맵</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
