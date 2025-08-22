import React from "react";
import "../../style/main/product.css";

import ProductsImage1 from "../../assets/images/product_image1.jpg";
import ProductsImage2 from "../../assets/images/product_image2.jpg";
import ProductsImage3 from "../../assets/images/product_image3.jpg";

import { Box, CircleCheckBig, ArrowRight } from "lucide-react";

import FadeInSection from "../../animations/ScrollFadeInSection";

const ProductsSection: React.FC = () => {
  return (
    <div id="product" className="ProductsSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center"
      >
        <div className="title_tag flex-center">
          <Box size={18} color="white" strokeWidth={2} />
          <span>제품 소개</span>
        </div>
        <h1>혁신적인 로봇 솔루션</h1>
        <p>
          다양한 산업 분야의 요구사항에 맞춘 최첨단 로봇팔과 자동화 시스템을
          제공합니다.
        </p>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="main_product">
          <div className="main_product_image">
            <img src={ProductsImage1} alt="" />
            <span className="flex-center">인기</span>
          </div>
          <div className="main_product_text">
            <h1>R-Series 6축 로봇팔</h1>
            <p>정밀 조립 작업을 위한 컴팩트한 6축 관절 로봇</p>
            <ul>
              <li>
                <div className="main_product_text_icon flex-center">
                  <CircleCheckBig color="#1e5ef3" size={20} strokeWidth={1} />
                </div>
                <span>최대 하중 1000kg</span>
              </li>
              <li>
                <div className="main_product_text_icon flex-center">
                  <CircleCheckBig color="#1e5ef3" size={20} strokeWidth={1} />
                </div>
                <span>반복 정밀도 ±0.02mm</span>
              </li>
              <li>
                <div className="main_product_text_icon flex-center">
                  <CircleCheckBig color="#1e5ef3" size={20} strokeWidth={1} />
                </div>
                <span>IP54 방진방수</span>
              </li>
              <li>
                <div className="main_product_text_icon flex-center">
                  <CircleCheckBig color="#1e5ef3" size={20} strokeWidth={1} />
                </div>
                <span>협동 로봇 인증</span>
              </li>
            </ul>
            <button className="main_product_button">
              <span>자세히 보기</span>
              <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
            </button>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center"
      >
        <div className="sub_product">
          <div className="sub_product1">
            <div className="sub_product_image">
              <span className="flex-center">신제품</span>
              <img src={ProductsImage2} alt="상품 이미지" />
            </div>
            <div className="sub_product_text">
              <p>PLC 자동화 모듈</p>
              <span>대형 부품 핸들링을 위한 고중량 로봇 시스템</span>
              <ul>
                <li>
                  <div className="sub_product_text_icon flex-center">
                    <CircleCheckBig color="#1e5ef3" size={16} strokeWidth={1} />
                  </div>
                  <span>생산 효율성 50% 증가</span>
                </li>
                <li>
                  <div className="sub_product_text_icon flex-center">
                    <CircleCheckBig color="#1e5ef3" size={16} strokeWidth={1} />
                  </div>
                  <span>PLC 자동화</span>
                </li>
              </ul>
              <button className="flex-center">
                <span>자세히 보기</span>
                <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
              </button>
            </div>
          </div>
          <div className="sub_product2">
            <div className="sub_product_image">
              <span className="flex-center">프리미엄</span>
              <img src={ProductsImage3} alt="상품 이미지" />
            </div>
            <div className="sub_product_text">
              <p>스마트 자동화 라인</p>
              <span>완전 자동화된 생산 라인 솔루션</span>
              <ul>
                <li>
                  <div className="sub_product_text_icon flex-center">
                    <CircleCheckBig color="#1e5ef3" size={16} strokeWidth={1} />
                  </div>
                  <span>AI 기반 품질 검사</span>
                </li>
                <li>
                  <div className="sub_product_text_icon flex-center">
                    <CircleCheckBig color="#1e5ef3" size={16} strokeWidth={1} />
                  </div>
                  <span>실시간 모니터링</span>
                </li>
              </ul>
              <button className="flex-center">
                <span>자세히 보기</span>
                <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
        <button className="more_product flex-center">
          <span>더 많은 제품 보기</span>
          <ArrowRight size={16} color="#ffffff" strokeWidth={2} />
        </button>
      </FadeInSection>
    </div>
  );
};

export default ProductsSection;
