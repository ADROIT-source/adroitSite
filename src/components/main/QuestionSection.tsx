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
      "애드로이트의 자동화 솔루션은 단순한 로봇 설치를 넘어, 고급 로봇공학과 AI, 시뮬레이션을 유기적으로 통합하는 것이 특징입니다. "
      + "이를 통해 고객별 공정 환경에 맞춘 맞춤형 자동화를 구현하고, 운영 효율성과 안정성을 동시에 확보합니다. "
      + "또한 확장성이 뛰어나 변화하는 생산 환경에도 유연하게 대응할 수 있습니다.",
  },
  {
    question: "애드로이트는 제품 품질과 일관성을 어떻게 보장하나요?",
    answer:
      "저희는 AI 기반 비전 검사 기술을 활용하여 모든 공정을 실시간으로 모니터링합니다. "
      + "이를 통해 불량을 조기에 감지하고, 데이터 기반 제어 시스템으로 품질 변동성을 최소화합니다. "
      + "결과적으로 고객은 안정적이고 일관된 고품질 생산 환경을 확보할 수 있습니다.",
  },
  {
    question: "Recyclon 시스템이란 무엇이며, 어떻게 ESG를 지원하나요?",
    answer:
      "Recyclon은 딥러닝 비전 기술을 적용하여 최대 56종의 재활용품을 자동으로 분류하는 지능형 시스템입니다. "
      + "수작업 대비 속도와 정확도를 크게 높여 인건비와 운영비를 절감합니다. "
      + "이를 통해 고객사는 ESG 경영 목표를 달성하고, 지속 가능한 친환경 생산에 기여할 수 있습니다.",
  },
  {
    question: "자동화 프로젝트 중 다운타임을 어떻게 최소화하나요?",
    answer:
      "애드로이트는 오프라인 프로그래밍(OLP) 기술을 활용해 설치 전 가상 환경에서 모든 로봇 동작을 완벽히 검증합니다. "
      + "이 과정에서 오류를 사전에 차단하고, 실제 설치 및 시운전 시간을 크게 단축할 수 있습니다. "
      + "덕분에 고객은 다운타임을 최소화하며 원활하게 프로젝트를 시작할 수 있습니다.",
  },
  {
    question: "애드로이트의 솔루션은 어떤 산업에 활용되나요?",
    answer:
      "저희 솔루션은 자동차, 전자, 물류 산업을 비롯해 다양한 제조 현장에 적용되고 있습니다. "
      + "특히 재활용, 포장, 자재 취급 및 공공 부문까지 폭넓게 활용됩니다. "
      + "산업 특성에 맞춘 맞춤형 자동화로 고객의 생산성과 경쟁력을 강화합니다.",
  },
  {
    question: "AMR 솔루션이란 무엇이며, 왜 중요한가요?",
    answer:
      "AMR(자율 이동 로봇)은 공장과 물류 창고에서 자재를 스스로 판단하고 이동하는 지능형 로봇입니다. "
      + "고정된 경로에 의존하지 않고 유연하게 움직이기 때문에 다양한 작업 환경에 적합합니다. "
      + "이를 통해 생산성을 높이고, 인더스트리 4.0 시대의 스마트 운영을 실현할 수 있습니다.",
  },
];


const QuestionSection: React.FC = () => {
  const [faqs] = useState<FAQItem[]>(initialFAQs);
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  // const addFAQ = (newFAQ: FAQItem) => {
  //   setFaqs([...faqs, newFAQ]);
  // };

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
          첨단 기술이 정밀성과 효율성으로 산업을 혁신하는 방법을 확인해 보세요.
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
