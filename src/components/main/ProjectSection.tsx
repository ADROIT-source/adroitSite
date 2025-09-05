// App.tsx
import React from "react";
import "../../style/main/project.css";
import "../../style/main/main.css";

import HyndalRotemLogo from "../../assets/logo/hyundai_rotem.png";
import EunpyeongLogo from "../../assets/logo/eunpyeong.png";
// import HankookLogo from "../../assets/logo/hankook.png";
// import HyndalMobisLogo from "../../assets/logo/hyundal_mobis.png";
// import HyundalWiaLogo from "../../assets/logo/hyundal_wia.png";
// import HyundalLogo from "../../assets/logo/hyundal.png";
import KnLogo from "../../assets/logo/kn.png";
import LotteLogo from "../../assets/logo/lotte.png";
// import NamyangNexmoLogo from "../../assets/logo/namyang_nexmo.png";
import NongshimLogo from "../../assets/logo/nongshim.png";
// import NvhkoreaLogo from "../../assets/logo/nvhkorea.png";
import SamsungLogo from "../../assets/logo/samsung_logo.png";
import SkhynixLogo from "../../assets/logo/skhynix.png";
import YangjuLogo from "../../assets/logo/yangju.png";

import FadeInSection from "../../animations/ScrollFadeInSection";

import { Quote } from "lucide-react";

const projectData = [
  {
    logo: HyndalRotemLogo,
    company: "현대자동차",
    project: "CleanForm 3D Robot Integration Project",
    desc: "애드로이트는 첨단 시뮬레이션과 오프라인 프로그래밍(OLP)을 활용해 현대자동차 차체 조립 라인의 3D 로봇 통합 솔루션프로젝트를 진행했습니다. 이를 통해 가동 시간과 품질을 크게 향상시키고 자동차 자동화의 새로운 기준을 제시했습니다.",
  },
  {
    logo: KnLogo,
    company: "기아자동차",
    project: "Automated Shaft & Disk Handling Solution",
    desc: "맞춤형 로봇 그리퍼와 비전 기술을 적용한 자동 샤프트·디스크 핸들링 시스템을 기아자동차에 설치했습니다. 이 프로젝트를 통해 생산성, 정밀도 및 작업장 안전성을 크게 향상시켰습니다.",
  },
  {
    logo: SamsungLogo,
    company: "삼성전자",
    project: "Semiconductor Robot Monitoring System",
    desc: "애드로이트는 삼성전자 스마트 로봇 모니터링 플랫폼을 개발했습니다. 이 시스템은 로봇 상태를 실시간으로 추적하여 예측 유지보수를 가능하게 하고 생산 중단 시간을 줄여여줍니다.",
  },
  {
    logo: SkhynixLogo,
    company: "SK 하이닉스",
    project: "FOUP AMR Integration Project",
    desc: "애드로이트는 AMR 기반 FOUP 운송 솔루션을 제공하여 자율 이동 로봇과 협업 로봇을 통합했습니다. 이를 통해 SK하이닉스의 자재 물류 및 클린룸 자동화를 크게 향상시켰습니다.",
  },
  {
    logo: LotteLogo,
    company: "롯데 로지틱스",
    project: "Palletizing Robot Automation",
    desc: "롯데로지스틱스는 애드로이트의 팔레타이징 로봇 솔루션을 도입하여 창고 내 팔레트 처리를 자동화했습니다. 이를 통해 물류 처리 속도와 정확성을 높이고 수작업을 크게 줄였습니다.",
  },
  {
    logo: EunpyeongLogo,
    company: "은평구청",
    project: "AI-Powered Recycling Robot Project",
    desc: "애드로이트는 서울 은평구에 Recyclon AI 재활용 로봇을 배치하여 폐기물 분류 정확도와 효율성을 개선하고, 도시의 ESG 목표 달성을 앞당겼습니다.",
  },
  {
    logo: YangjuLogo,
    company: "양주시청",
    project: "Smart Waste Sorting Automation",
    desc: "양주시 재활용 센터는 애드로이트의 AI 기반 Recyclon 로봇을 도입하여 지방 자치 단체 폐기물 관리에서 분류 정확도, 처리 속도 및 지속 가능성을 크게 향상시켰습니다.",
  },
  {
    logo: NongshimLogo,
    company: "농심",
    project: "Packaging Line Robot Integration",
    desc: "농심은 애드로이트의 로봇 자동화 솔루션으로 포장 라인을 업그레이드하여 더 빠르고 일관된 제품 처리가 가능해졌으며 포장 품질을 높였습니다.",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div id="project" className="ProjectSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center ProjectSection_text"
      >
        <span>Our Clients</span>
        <h1>실적으로 입증된 역량, 신뢰로 쌓아온 전문성</h1>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="project_grid">
          {projectData.map((item, i) => (
            <div key={i} className="project_card">
              <img src={item.logo} alt={item.company} className="project_img" />
              <h3>{item.company}</h3>
              <p className="project_title">{item.project}</p>
              <span className="project_desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* <div className="Project_dotted1"></div>
      <div className="Project_dotted2"></div>
      <div className="Project_dotted3"></div> */}
    </div>
  );
};

export default ProjectSection;
