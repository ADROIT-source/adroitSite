import React from "react";
import "../../style/main/history.css";
import "../../style/main/main.css";
import { CalendarDays } from "lucide-react";
import FadeInSection from "../../animations/ScrollFadeInSection";
import AnimatedCounter from "../../animations/AnimatedCounter";


interface HistoryItem {
  title: string;
  desc: string;
}

interface YearGroup {
  year: string;
  projects: HistoryItem[];
}

const historyData: YearGroup[] = [
  {
    year: "2025",
    projects: [
      { title: "프로젝트", desc: "기아자동차(광주) 붓터치 라인 PJ" },
      { title: "프로젝트", desc: "현대자동차(전주) 비전 시스템 PJ" },
      { title: "프로젝트", desc: "삼성전자(광주) 대형 자재 포장 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "기아자동차(광주) 플러그 라인 PJ" },
      { title: "프로젝트", desc: "롯데홈쇼핑 디팔렛타이징 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "농심(안양) 인케이싱 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "테스코 전조가공 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "성진TLS 수직반송기 및 컨베이어 자동화 PJ" },
      { title: "프로젝트", desc: "철도청 쇼트 로봇 PJ" },
      { title: "프로젝트", desc: "철도청 도장 로봇 PJ" },
    ],
  },
  {
    year: "2024",
    projects: [
      { title: "프로젝트", desc: "현대자동차(울산) Creaform 3D 비전 시스템 PJ" },
      { title: "프로젝트", desc: "새한프라텍(오창) 수직반송기 PJ" },
      { title: "프로젝트", desc: "테스코 CNC 가공라인 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "현대자동차(울산) Photoneo 터널형 비전 시스템 PJ" },
      { title: "프로젝트", desc: "기아자동차(광주) 로봇 교체 PJ" },
      { title: "프로젝트", desc: "농심(안양) 팔렛타이징 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "서울시(은평구) 재활용 분류 다관절 로봇 PJ" },
      { title: "프로젝트", desc: "남양공업 샤프트 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "다관절 로봇 선별기 PJ" },
      { title: "프로젝트", desc: "제헌정공 로봇 자동화 PJ" },
    ],
  },
  {
    year: "2023",
    projects: [
      { title: "프로젝트", desc: "㈜어니스트 협동로봇 자동화 PJ" },
      { title: "프로젝트", desc: "양주시 재활용 분류 로봇 자동화 PJ" },
      { title: "프로젝트", desc: "남양공업 디스크 디팔렛타이징 로봇 PJ" },
      { title: "프로젝트", desc: "은평구 독립형 재활용 분류 로봇 PJ" },
      { title: "프로젝트", desc: "남양공업 조립 자동화 로봇 PJ" },
      { title: "프로젝트", desc: "랙 자동화 로봇 PJ" },
      { title: "프로젝트", desc: "양주시 고속 재활용 분류 로봇 PJ" },
      { title: "프로젝트", desc: "농심(안양) 팔렛타이징 로봇 자동화 PJ" },
    ],
  },
  {
    year: "2022",
    projects: [
      { title: "프로젝트", desc: "랙 자동화 로봇 PJ" },
      { title: "프로젝트", desc: "대광에코텍 MRF PJ" },
      { title: "프로젝트", desc: "제주 독립형 재활용 분류 로봇 PJ" },
      { title: "프로젝트", desc: "㈜우리홈쇼핑 디팔렛타이징 로봇 PJ" },
      { title: "프로젝트", desc: "㈜젠코 인케이싱 & 디팔렛타이징 로봇 PJ" },
      { title: "프로젝트", desc: "서울시(도봉구) 고속형 재활용 분류 로봇 PJ" },
      { title: "프로젝트", desc: "디팔렛타이징 Pickit 3D 비전 시스템 PJ" },
      { title: "프로젝트", desc: "민팃 로봇 자동화 PJ" },
    ],
  },
  {
    year: "2021",
    projects: [
      { title: "프로젝트", desc: "흥진기업 웜라인 로봇 PJT (DN8)" },
      { title: "프로젝트", desc: "남양공업 Shaft Line 로봇 PJT" },
      { title: "프로젝트", desc: "(주) 심텍 PCB 핸들링 로봇 PJT" },
      { title: "프로젝트", desc: "서울시 도봉구 재활용 분류 로봇 PJT" },
    ],
  },
  {
    year: "Before 2021",
    projects: [
      { title: "프로젝트", desc: "기아자동차 광주 SP2 PJT" },
      { title: "프로젝트", desc: "기아자동차 광주 SK3 PJT" },
      { title: "프로젝트", desc: "기아자동차 광주 노후 로봇 교체 PJT" },
      { title: "프로젝트", desc: "기아자동차 광주 NQ5 PJT" },
      { title: "프로젝트", desc: "현대자동차 울산 공장 실링 ISRA 비전 로봇 PJT" },
      { title: "프로젝트", desc: "(주) 하이닉스 Probe 핸들링 AMR + 협동 로봇 PJT" },
      { title: "프로젝트", desc: "(주) AMKOR 카세트 핸들링 AMR + 협동 로봇 PJT" },
      { title: "프로젝트", desc: "(주) 삼성전자 카세트 핸들링 AMR + 협동 로봇 PJT" },
      { title: "프로젝트", desc: "(주) SPC 롤케익 핸들링 로봇 PJT" },
      { title: "프로젝트", desc: "(주) SPC 오븐 핸들링 로봇 PJT" },
    ],
  },
];

const HistorySection: React.FC = () => {
  return (
    <div id="history" className="HistorySection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center HistorySection_text"
      >
        <div className="title_tag flex-center">
          <CalendarDays size={18} color="white" strokeWidth={2} />
          <span>우리의 여정</span>
        </div>
        <h1>혁신의 발자취</h1>
        <p>
          20여 년간 축적된 기술과 끊임없는 혁신으로 로봇 산업의 미래를
          만들어가고 있습니다.
        </p>
      </FadeInSection>
      <div className="history">
        <div className="History_dotted1"></div>
        <div className="History_dotted2"></div>
        <div className="History_dotted3"></div>
        <div className="History_dotted4"></div>
        <div className="History_dotted5"></div>
        <div className="History_dotted6"></div>
        <div className="history_line"></div>
        {historyData.map((yearGroup, index) => (
          <div
            key={index}
            className={`history_card_wrap ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <FadeInSection
              direction="up"
              duration={800}
              className="HistorySection_card_wrap"
            >
              <div className="history_card">
                <h3>{yearGroup.year}</h3>
                <ul>
                  {yearGroup.projects.map((item, projIndex) => (
                    <li key={projIndex} className="project_item">
                      {item.desc}
                      {/* <span>테스트</span> */}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        ))}
      </div>
      {/* <FadeInSection
        direction="up"
        duration={800}
        className="HistorySection_footer"
      >
        <li className="flex-direction-center">
          <AnimatedCounter target={20} suffix="년" fontSize="42px" className="HistorySection_footer_couter"/>
          <span>업계 경험</span>
        </li>
        <li className="flex-direction-center">
          <AnimatedCounter target={32} suffix="+" fontSize="42px" className="HistorySection_footer_couter"/>
          <span>완료된 프로젝트</span>
        </li>
        <li className="flex-direction-center">
          <AnimatedCounter target={20} suffix="+" fontSize="42px" className="HistorySection_footer_couter" />
          <span>직원수</span>
        </li>
      </FadeInSection> */}
    </div>
  );
};

export default HistorySection;
