import React, { useState } from "react";
import "../../style/main/product2.css";
import { Box } from "lucide-react";

import FadeInSection from "../../animations/ScrollFadeInSection";

import ProductsImage1 from "../../assets/images/product_image1.jpg";
import ProductsImage2 from "../../assets/images/product_image2.jpg";
import ProductsImage3 from "../../assets/images/product_image3.jpg";

const menuData = [
  {
    image: ProductsImage1,
    texts: [
      {
        title: "통합 자동화",
        desc: "로봇 센서 디지털 플랫폼을 매끄럽게 연결하여 통합 지능형 제조를 구현합니다.",
      },
      {
        title: "실시간 데이터 인사이트",
        desc: "실시간 생산 데이터와 첨단 분석으로 모든 공정을 모니터링하고 최적화합니다.",
      },
      {
        title: "확장 가능·유연한 생산",
        desc: "모듈형 미래형 시스템으로 신제품 라인이나 생산량 변화에 신속히 대응합니다.",
      },
    ],
  },
  {
    image: ProductsImage2,
    texts: [
      {
        title: "자동 품질 검사",
        desc: "AI 기반 비전 시스템이 결함, 오정렬 및 이상 현상을 높은 정확도로 감지합니다.",
      },
      {
        title: "딥러닝 분석",
        desc: "딥러닝을 활용하여 검사 성능과 공정 효율성을 지속적으로 개선합니다.",
      },
      {
        title: "일관된 제품 품질",
        desc: "인적 오류를 최소화하고 모든 제품이 가장 엄격한 기준을 충족하도록 보장합니다.",
      },
    ],
  },
  {
    image: ProductsImage1, // 테스트: 3번째도 임시로 image1
    texts: [
      { title: "지능형 폐기물 식별", desc: "3번째 메뉴 클릭 시 보여질 내용" },
      {
        title: "고속·고정밀 분류",
        desc: "빠르고 정밀한 로봇 분류로 재활용률과 운영 효율성을 향상시킵니다.",
      },
      {
        title: "ESG 및 지속 가능성 효과",
        desc: "환경 목표 달성을 지원하고 인건비를 절감하며 ESG 이니셔티브를 촉진합니다.",
      },
    ],
  },
  {
    image: ProductsImage3, // 👉 요청하신대로 4번째 클릭하면 image3
    texts: [
      {
        title: "유연한 자재 운송",
        desc: "AMR이 복잡한 공장 및 창고 환경에서 자재를 안전하고 효율적으로 운송합니다.",
      },
      {
        title: "협업 로봇 통합",
        desc: "AMR을 코봇 및 기존 시스템과 연동해 매끄러운 물류 자동화를 구현합니다.",
      },
      {
        title: "워크플로우 최적화 및 다운타임 감소",
        desc: "지능형 경로 계획과 자율 장애물 회피 기능으로 운영 중단을 최소화합니다.",
      },
    ],
  },
];

const ProductsSection2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="product2" className="ProductsSection2">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center ProductsSection2_text"
      >
        <div className="title_tag flex-center product_tag">
          <Box size={18} color="white" strokeWidth={2} />
          <span>제품 소개</span>
        </div>
        <h1>혁신 · 자동화 · 성장</h1>
        <p>
          최첨단 로봇 및 AI 솔루션이 산업을 혁신하여
          <br />
          효율성과 지속 가능성을 높이는 방법을 확인해 보세요
        </p>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="product_content_wrap">
          {/* 메인 이미지 + 텍스트 */}
          <div className="product_content">
            <div className="product_image">
              <img src={menuData[activeIndex].image} alt="" />
            </div>

            <ul className="product_text">
              {menuData[activeIndex].texts.map((t, idx) => (
                <li key={idx} className="fade-item">
                  <p>{t.title}</p>
                  <span>{t.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="product_menu">
            {[
              {
                title: "스마트 팩토리 솔루션",
                desc: "통합 시스템으로 생산 방식을 혁신하세요.",
              },
              {
                title: "AI 비전 시스템",
                desc: "첨단 AI 기술로 품질 관리를 강화하세요.",
              },
              {
                title: "Recyclon 플랫폼",
                desc: "AI 기반 정밀도로 재활용을 최적화하세요.",
              },
              {
                title: "자율 이동 로봇(AMR)",
                desc: "AMR 솔루션으로 물류 흐름을 간소화하세요.",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{ cursor: "pointer" }}
                className={activeIndex === idx ? "active" : ""}
              >
                <p>{item.title}</p>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ProductsSection2;
