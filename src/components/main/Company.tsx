import React from "react";
import "../../style/main/company.css";

import FadeInSection from "../ScrollFadeInSection";

// 로고 이미지 모음
import HyndalRotemLogo from "../../assets/logo/hyundai_rotem.png";
import EunpyeongLogo from "../../assets/logo/eunpyeong.png";
import HankookLogo from "../../assets/logo/hankook.png";
import HyndalMobisLogo from "../../assets/logo/hyundal_mobis.png";
import HyundalWiaLogo from "../../assets/logo/hyundal_wia.png";
import HyundalLogo from "../../assets/logo/hyundal.png";
import KnLogo from "../../assets/logo/kn.png";
import LotteLogo from "../../assets/logo/lotte.png";
import NamyangNexmoLogo from "../../assets/logo/namyang_nexmo.png";
import NongshimLogo from "../../assets/logo/nongshim.png";
import NvhkoreaLogo from "../../assets/logo/nvhkorea.png";
import SamsungLogo from "../../assets/logo/samsung_logo.png";
import SkhynixLogo from "../../assets/logo/skhynix.png";
import YangjuLogo from "../../assets/logo/yangju.png";

const companyLogos = [
  HyndalRotemLogo,
  EunpyeongLogo,
  HankookLogo,
  HyndalMobisLogo,
  HyundalWiaLogo,
  HyundalLogo,
  KnLogo,
  LotteLogo,
  NamyangNexmoLogo,
  NongshimLogo,
  NvhkoreaLogo,
  SamsungLogo,
  SkhynixLogo,
  YangjuLogo,
];

const Company: React.FC = () => {
  return (
    <div className="Company">
    <FadeInSection direction="up" duration={800}>
    <span className="flex-center">신뢰받는 파트너</span>
    <h1 className="flex-center">대한민국 대표 기업들과 함께합니다.</h1>
    </FadeInSection>
    <ul className="company_card">
        <div className="company_card_inner">
            {companyLogos.map((logo, idx) => (
            <li key={idx}>
                <img src={logo} alt="회사 로고" />
            </li>
            ))}
            {companyLogos.map((logo, idx) => (
            <li key={`clone-${idx}`}>
                <img src={logo} alt="회사 로고" />
            </li>
            ))}
        </div>
    </ul>
    </div>
  );
};

export default Company;
