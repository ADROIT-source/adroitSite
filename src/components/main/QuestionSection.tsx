import React, { useState } from "react";
import "../../style/main/question.css";
import { Info, ChevronUp, ChevronDown } from "lucide-react";

import FadeInSection from "../../animations/ScrollFadeInSection";

import { MoveRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const initialFAQs: FAQItem[] = [
  {
    question: "애드로이트의 자동화 솔루션은 무엇이 독특한가요?",
    answer:
      "당사의 솔루션은 고급 로봇공학, AI, 시뮬레이션을 완벽히 통합하여 고객별 환경에서 효율성, 신뢰성, 확장성을 극대화합니다.",
  },
  {
    question: "애드로이트는 제품 품질과 일관성을 어떻게 보장하나요?",
    answer:
      "AI 기반 비전 검사와 데이터 기반 제어를 활용해 정밀 품질 관리, 실시간 모니터링, 지속적인 공정 개선을 보장합니다.",
  },
  {
    question: "Recyclon 시스템이란 무엇이며, 어떻게 ESG를 지원하나요?",
    answer:
      "Recyclon은 딥러닝 비전으로 최대 56종의 재활용품을 자동 분류하여 인건비를 절감하고 정확도를 높이며, 고객의 ESG 목표 달성을 돕습니다.",
  },
  {
    question: "자동화 프로젝트 중 다운타임을 어떻게 최소화하나요?",
    answer:
      "당사의 오프라인 프로그래밍(OLP)은 설치 전에 모든 로봇 동작을 시뮬레이션하고 검증하여 오류를 방지하고 설치 시간을 단축하며 원활한 프로젝트 개시를 보장합니다.",
  },
  {
    question: "애드로이트의 솔루션은 어떤 산업에 활용되나요?",
    answer:
      "저희는 자동차, 전자, 물류, 공공 부문을 비롯해 제조·재활용·포장·자재 취급 등 다양한 분야에 첨단 자동화 솔루션을 제공합니다.",
  },
  {
    question: "AMR 솔루션이란 무엇이며, 왜 중요한가요?",
    answer:
      "AMR(자율 이동 로봇)은 공장 및 창고에서 자재를 유연하고 안전하며 효율적으로 운송하여 생산성을 높이고 인더스트리 4.0 운영을 가능하게 합니다.",
  },
];

const QuestionSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs);
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const addFAQ = (newFAQ: FAQItem) => {
    setFaqs([...faqs, newFAQ]);
  };

  return (
    <div id="question" className="QuestionSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center QuestionSection_text"
      >
        <div className="title_tag flex-center">
          <Info size={18} color="white" strokeWidth={2} />
          <span>자주하는 묻는 질문</span>
        </div>
        <h1>궁금한 점이 있으신가요?</h1>
        <p className="question_desc">
          로봇팔 도입에 관한 자주 묻는 질문들을 확인해보세요.
        </p>
      </FadeInSection>
      <ul className="question_card_wrap flex-direction-center">
        {faqs.map((faq, index) => (
          <FadeInSection
            direction="up"
            duration={800}
            key={index}
            className="question_card"
          >
            <div
              className="question_card_title"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <p>{faq.question}</p>
              {expanded === index ? (
                <ChevronUp size={24} color="white" strokeWidth={2} />
              ) : (
                <ChevronDown size={24} color="white" strokeWidth={2} />
              )}
            </div>
            <div
              className={`question_response ${
                expanded === index ? "expanded" : "collapsed"
              }`}
            >
              <span>{faq.answer}</span>
            </div>
          </FadeInSection>
        ))}
      </ul>
      <FadeInSection direction="up" duration={800}>
        <p className="more_question">
          더 궁금한 점이 있으시다면 언제든지 문의해주세요.
        </p>
        <li
          className="more_question_button flex-center"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span>문의하기</span>
          <MoveRight
            color="#1e5ef3"
            className="more_question_button_arrow"
            size={16}
          />
        </li>
      </FadeInSection>
    </div>
  );
};

export default QuestionSection;
