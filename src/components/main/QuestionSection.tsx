import React, { useState } from "react";
import "../../style/main/question.css";
import { Info, ChevronUp, ChevronDown } from "lucide-react";

import FadeInSection from "../ScrollFadeInSection";

import { MoveRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const initialFAQs: FAQItem[] = [
  {
    question: "로봇팔 도입에 필요한 초기 투자 비용은 얼마나 되나요?",
    answer:
      "로봇팔의 종류와 작업 환경에 따라 다르지만, 일반적으로 6축 로봇팔의 경우 5천만원~2억원 사이입니다. 정확한 견적은 현장 조사 후 제공해드립니다.",
  },
  {
    question: "기존 생산 라인에 로봇을 통합하는데 얼마나 걸리나요?",
    answer:
      "일반적으로 2-4주 정도 소요됩니다. 복잡한 시스템의 경우 6-8주가 필요할 수 있으며, 설치 기간 중에도 부분적 생산은 가능합니다.",
  },
  {
    question: "로봇 작동을 위한 별도의 교육이 필요한가요?",
    answer:
      "네, 안전하고 효율적인 운영을 위해 2-3일간의 기본 교육을 제공합니다. 고급 기능 활용을 위한 심화 교육도 별도로 제공됩니다.",
  },
  {
    question: "로봇에 문제가 생겼을 때 A/S는 어떻게 받나요?",
    answer:
      "24시간 콜센터 운영으로 즉시 대응하며, 전국 서비스 센터를 통해 당일 출동 서비스를 제공합니다. 원격 진단으로 80% 이상의 문제를 즉시 해결합니다.",
  },
  {
    question: "로봇 수명과 보증 기간은 어떻게 되나요?",
    answer:
      "일반적으로 10-15년의 수명을 가지며, 기본 2년 보증에 연장 보증 옵션도 제공합니다. 정기 점검을 통해 수명을 더욱 연장할 수 있습니다.",
  },
  {
    question: "소규모 제조헙체도 도입이 가능한가요?",
    answer:
      "물론입니다. 소규모 업체를 위한 컴팩트한 협동로봇(코봇)과 임대 서비스도 제공하여 초기 부담을 줄일 수 있습니다.",
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
    <div id="contact" className="QuestionSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center"
      >
        <div className="title_tag flex-center">
          <Info size={18} color="white" strokeWidth={2} />
          <span>자주하는 묻는 질문</span>
        </div>
        <h1>궁금한 점이 있으신가요?</h1>
        <p className="question_desc">로봇팔 도입에 관한 자주 묻는 질문들을 확인해보세요.</p>
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
      <p className="more_question">더 궁금한 점이 있으시다면 언제든지 문의해주세요.</p>
      <li className="more_question_button flex-center">
        <span >문의하기</span>
         <MoveRight color="#1e5ef3" className="more_question_button_arrow" size={16} />
      </li>
      </FadeInSection>
    </div>
  );
};

export default QuestionSection;
