import React from "react";
import "../../style/main/history.css";
import { CalendarDays } from "lucide-react";
import FadeInSection from "../ScrollFadeInSection";
import AnimatedCounter from "../AnimatedCounter";

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
    year: "Before 2021",
    projects: [
      { title: "프로젝트", desc: "기아자동차 광주 SP2 PJT" },
      { title: "프로젝트", desc: "기아자동차 광주 SK3 PJT" },
      { title: "프로젝트", desc: "기아자동차 광주 노후 로봇 교체 PJT" },
      { title: "프로젝트", desc: "기아 자동차 광주 NQ5 PJT" },
      { title: "프로젝트", desc: "현대 자동차 울산 공장 실링 ISRA 비전 로봇 PJT" },
      { title: "프로젝트", desc: "(주) 하이닉스 Probe 핸들링 AMR _+ 협동 로봇 PJT" },
      { title: "프로젝트", desc: "(주) AMKOR 카세트 핸들링 AMR + 협동 로봇 PJT" },
      { title: "프로젝트", desc: "(주) 삼성전자카세트핸들링AMR+ 협동로봇PJT" },
      { title: "프로젝트", desc: "(주) SPC 롤케익핸들링로봇PJT" },
      { title: "프로젝트", desc: "(주) SPC 오븐 핸들링로봇PJT" },
    ],
  },
  {
    year: "2021",
    projects: [
      { title: "프로젝트", desc: "흥진기업웜라인로봇PJT ( DN8 )" },
      { title: "프로젝트", desc: "남양공업Shaft Line 로봇 PJT" },
      { title: "프로젝트", desc: "(주)심텍PCB 핸들링로봇PJT" },
      { title: "프로젝트", desc: "서울시도봉구재활용분류로봇PJT" },
    ],
  },
  {
    year: "2022",
    projects: [
      { title: "프로젝트", desc: "현대자동시울산공장실링라인PJT" },
      { title: "프로젝트", desc: "남양공업Disk Line Depalletizing 로봇 PJT ( DN8 외 )" },
      { title: "프로젝트", desc: "(주) 농심 안성- 팔렛타이징로봇PJT" },
      { title: "프로젝트", desc: "(주) 젠코 인케이싱및디팔렛타이징PJT" },
      { title: "프로젝트", desc: "(주) 롯데홈쇼핑디팔렛타이징로봇PJT" },
    ],
  },
  {
    year: "2023",
    projects: [
      { title: "프로젝트", desc: "대진하이텍Shaft Line 로봇 PJT ( MQ4" },
      { title: "프로젝트", desc: "현대/기아연구소실링로봇PJT" },
      { title: "프로젝트", desc: "남양공업Disk Line Depalletizing 로봇 PJT ( CN7 외 )" },
      { title: "프로젝트", desc: "양주시재활용분류로봇PJT" },
      { title: "프로젝트", desc: "서울시은평구재활용분류다관절로봇PJT" },
    ],
  },
  {
    year: "2024",
    projects: [
      { title: "프로젝트", desc: "현대자동차울산공장PickIt3D 로봇PJT" },
      { title: "프로젝트", desc: "현대자동차울산공장Creaform 3D 로봇 PJT ( RG3 PE )" },
      { title: "프로젝트", desc: "기아자동차광주공장로봇교체PJT ( NQ5 PE )" },
      { title: "프로젝트", desc: "(주)농심 안양- 팔렛타이징로봇PJT" },
      { title: "프로젝트", desc: "서울시은평구재활용분류다관절로봇PJT" },
      { title: "프로젝트", desc: "(주) 어니스트협동로봇핸들링라인( 두산로봇) PJT" },
      { title: "프로젝트", desc: "(주) 서울시은평구재활용분류로봇PJT" },
    ],
  },
];

const HistorySection: React.FC = () => {
  return (
    <div id="history" className="HistorySection">
      <FadeInSection direction="up" duration={800} className="flex-direction-center">
        <div className="title_tag flex-center">
          <CalendarDays size={18} color="white" strokeWidth={2} />
          <span>우리의 여정</span>
        </div>
        <h1>혁신의 발자취</h1>
        <p>
          20여 년간 축적된 기술과 끊임없는 혁신으로 로봇 산업의 미래를 만들어가고 있습니다.
        </p>
      </FadeInSection>
      <div className="history">
        <div className="history_line"></div>
        {historyData.map((yearGroup, index) => (
          <div
            key={index}
            className={`history_card_wrap ${index % 2 === 0 ? "left" : "right"}`}
          >
            <FadeInSection direction="up" duration={800}>
              <div className="history_card">
                <h3>{yearGroup.year}</h3>
                <ul>
                  {yearGroup.projects.map((item, projIndex) => (
                    <li key={projIndex} className="project_item">
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        ))}
      </div>
      <FadeInSection direction="up" duration={800} className="HistorySection_footer">
          <li className="flex-direction-center">
            <AnimatedCounter target={25} suffix="년" fontSize="42px"/>
            <span>업계 경험</span>
          </li>
          <li className="flex-direction-center">
            <AnimatedCounter target={1000} suffix="+" fontSize="42px"/>
            <span> 설치된 로봇</span>
          </li>
          <li className="flex-direction-center">
            <AnimatedCounter target={15} suffix="개국" fontSize="42px"/>
            <span>해외진출</span>
          </li>
      </FadeInSection>
    </div>
  );
};

export default HistorySection;