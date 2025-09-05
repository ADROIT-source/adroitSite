import React from "react";

import "../../style/main/footer2.css";

// import FadeInSection from "../../animations/ScrollFadeInSection";

import KawasakiLogo from "../../assets/logo/kawasaki.png";
import InovanceLogo from "../../assets/logo/inovance.png";
import AbbLogo from "../../assets/logo/abb.png";
import PinklabLogo from "../../assets/logo/pinklab.png";
import HiunLogo from "../../assets/logo/hiun.png";
import MechMindLogo from "../../assets/logo/mech-mind.png";

const FooterSection2: React.FC = () => {
  return (
    <div className="FooterSection2">
      <h1>Partner with us</h1>
      <ul>
          <li>T. +82-70-8810-5612</li>
          <li>F. +82-31-624-5612</li>
          <li>E. adroit@adroit.co.kr</li>
      </ul>
      <ul className="footer_logo">
        <img src={AbbLogo} alt="" />
        <img src={KawasakiLogo} alt="" />
        <img src={InovanceLogo} alt="" />
        <img src={PinklabLogo} alt="" />
        <img src={HiunLogo} alt="" />
        <img src={MechMindLogo} alt="" />
      </ul>
    </div>
  );
};

export default FooterSection2;
