import React, { useEffect, useState } from "react";
import "../style/artibot/artibot.css";

import Bar from "../components/bar/bar";
import "../style/bar/bar.css";
import FadeInSection from "../animations/ScrollFadeInSection";

import { ChevronRight, Github, ChevronUp, ChevronDown } from "lucide-react";
import AritbotImage1 from "../assets/images/lD0GtgZQ0eerxRxLZenKldeiVI.avif";
import AritbotImage2 from "../assets/images/mhU2lMFiZWUfzF5OV82S5QDOv8.avif";
import AritbotImage3 from "../assets/images/YBD5gPDw8vNLPaXb5DfeGbPNvEA.avif";
import AritbotImage5 from "../assets/images/Hg8DJlEee1VYKsGgpiFMDUW4mc.avif";
import Nvidia from "../assets/images/nvidia.png";
import Cobot from "../assets/images/cobot.avif";
import Ultra from "../assets/images/ultra.avif";
import GeorgiaTech from "../assets/images/georgia_tech.avif";
import PathRobotics from "../assets/images/path_robotics.avif";
import ZeonSystems from "../assets/images/zeon_systems.png";
import Google from "../assets/images/google.avif";
import BoostRobotics from "../assets/images/boost_robotics.avif";

import AritBotImgCard1 from "../assets/images/aritbot_card1.avif";
import AritBotImgCard2 from "../assets/images/aritbot_card2.avif";
import AritBotImgCard3 from "../assets/images/aritbot_card3.avif";
import AritBotImgCard4 from "../assets/images/aritbot_card4.avif";
import AritBotImgCard5 from "../assets/images/aritbot_card5.avif";
import AritBotImgCard6 from "../assets/images/aritbot_card6.avif";

import HyndalRotemGrayLogo from "../assets/logo/hyundai_rotem_gray.png";
import EunpyeongLogo from "../assets/logo/eunpyeong.png";
import HankookGrayLogo from "../assets/logo/hankook_gray.png";
import HyndalMobisGrayLogo from "../assets/logo/hyundal_mobis_gray.png";
import HyundalWiaGrayLogo from "../assets/logo/hyundal_wia_gray.png";
import HyundalGrayLogo from "../assets/logo/hyundal_gray.png";
import KnGrayLogo from "../assets/logo/kn_gray.png";
import LotteGrayLogo from "../assets/logo/lotte_gray.png";
import NamyangNexmoGrayLogo from "../assets/logo/namyang_nexmo_gray.png";
import NongshimGrayLogo from "../assets/logo/nongshim_gray.png";
import NvhkoreaGrayLogo from "../assets/logo/nvhkorea_gray.png";
import SamsungGrayLogo from "../assets/logo/samsung_logo_gray.png";
import SkhynixGrayLogo from "../assets/logo/skhynix_gray.png";
import YangjuLogo from "../assets/logo/yangju.png";


import AdroitLogo from "../assets/images/logo1.png";
const faqData = [
  {
    question: "How is Arti Bot related to OpenArm?",
    answer: `Arti Bot is an independent company backed by Matter Venture Partners in Palo Alto, CA. Our team is comprised of hardware and robotics veterans from MIT, Stanford, CalTech, Google, Y Combinator, and many more.  We build low volume custom robots for many teams and individuals.  OpenArm was open sourced by the Reazon Human Interaction Lab in Tokyo.  We are not officially affiliated with Reazon.`,
  },
  {
    question: "Where is Arti Bot Headquartered?",
    answer: `Big Robotics Inc (DBA Arti Robotics) is a USA C Corporation with offices in Palo Alto California and Taipei Taiwan. We are a global team with decades of experience in robotics, supply chain, manufacturing. All products are built, tested, and shipped from our facilities in Taiwan.`,
  },
  {
    question: "Can you customize robots for me?",
    answer: `Yes absolutely - we understand that no 1 robot fits all use-cases, and actively work with multiple customers to design custom robots.  Contact us at enterprise@anvil.bot to discuss customization projects.`,
  },
];

const AritBot: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>(
    faqData.map((_, i) => i)
  );

  // 새로고침 시 위로 이동

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFAQ = (index: number) => {
    if (openItems.includes(index)) {
      // 이미 열려 있으면 닫기
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      // 안 열려 있으면 추가로 열기
      setOpenItems([...openItems, index]);
    }
  };
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translate = offsetY * 0.2;

  // 스케일 제한 (1 ~ 1.3 사이)
  const minScale = 1;
  const maxScale = 1.08;
  const scale = Math.min(maxScale, Math.max(minScale, 1 + offsetY * 0.0003));

  return (
    <div className="AritBot" id="aritbot">
      <Bar />
      <div className="AritBotSection">
        <div className="aritbot_header_txt">
          <FadeInSection direction="right" animation="blur-seq">
            <h1>
              Arti Bot<br></br> helps teams build and ship
            </h1>
            <h1>custom robot hardware quickly</h1>
            <p>Get an OpenArm for $5000</p>
          </FadeInSection>
        </div>
        <a href="/store">
          <button className="aritbot_visit_store_button">
            <span>Visit Store</span>
            <ChevronRight size={22} color="black" strokeWidth={1} />
          </button>
        </a>

        <div className="aritbot_header_img">
          <img
            src={AritbotImage1}
            alt="AritBot header"
            style={{
              transform: `translateY(${translate}px) scale(${scale}) translateZ(0)`,
              willChange: "transform",
              transition: "transform 0.1s linear",
            }}
          />
        </div>

        <FadeInSection
          className="aritbot_company"
          direction="right"
          animation="blur-seq"
        >
          <h1>
            Today, we support teams from large corporation to small startups.  Arti speeds up any hardware team, augmenting them with our hardware and supply chain expertise
          </h1>
          <div className="aritbot_company_grid">
            <img src={HyndalRotemGrayLogo} alt="Nvidia" />
            <img src={SamsungGrayLogo} alt="Cobot" />
            <img src={HankookGrayLogo} alt="Ultra" />
            <img src={HyndalMobisGrayLogo} alt="Georgia Tech" />
            <img src={SkhynixGrayLogo} alt="Path Robotics" />
            <img src={NvhkoreaGrayLogo} alt="Zeon Systems" />
            <img src={KnGrayLogo} alt="Google" />
            <img src={LotteGrayLogo} alt="Boost Robotics" />
            <img src={NongshimGrayLogo} alt="Boost Robotics" />
            <img src={NamyangNexmoGrayLogo} alt="Boost Robotics" />
            <img src={HyundalWiaGrayLogo} alt="Boost Robotics" />
            <img src={HyundalGrayLogo} alt="Boost Robotics" />
          </div>
          <p>and many more across …</p>
        </FadeInSection>
        <div className="aritbot_content_wrap">
          <div className="aritbot_content">
            <FadeInSection
              className="aritbot_content_text"
              direction="right"
              animation="blur-seq"
            >
              <div className="aritbot_content_title">
                <Github size={22} color="#c6d2ff" strokeWidth={1} />
                <p>Open Source Hardware</p>
              </div>
              <h1>
                Arti builds low volume open<br></br>source hardware for teams{" "}
                <br></br>across the world.
              </h1>
              <p className="aritbot_content_sub">
                Whether you need an OpenArm, or a custom robot,<br></br> our
                team has the deep expertise needed to build<br></br> and ship
                high quality robots for your team.
              </p>
              <p className="aritbot_content_sub">
                Get started today with our <span>$5000</span> OpenArm kit.
              </p>
              <a href="https://github.com/ADROIT-source" target="_blank">
                <button className="aritbot_visit_store_button">
                  <span>Go Github</span>
                  <ChevronRight size={22} color="black" strokeWidth={1} />
                </button>
              </a>
            </FadeInSection>
            <div className="aritbot_content_img">
              <img
                src={AritbotImage2}
                alt="content"
                style={{
                  transform: `translateY(-${offsetY * 0.05}px) translateZ(0)`,
                  willChange: "transform",
                  transition: "transform 0.1s linear",
                }}
              />
            </div>
          </div>
        </div>
        <div className="aritbot_contact_wrap">
          <div className="aritbot_contact">
            <div className="aritbot_contact_img2">
              <img
                src={AritbotImage3}
                alt="content"
                style={{
                  transform: `scale(0.75) translateY(-${
                    offsetY * 0.1
                  }px) translateZ(0)`,
                  willChange: "transform",
                  transition: "transform 0.1s linear",
                }}
              />
            </div>
            <FadeInSection
              className="aritbot_contact_text"
              direction="right"
              animation="blur-seq"
            >
              <div className="aritbot_contact_title">
                <Github size={22} color="#c6d2ff" strokeWidth={1} />
                <p>One Size Fits None. Customize Your Robots</p>
              </div>
              <h1>
                Need customizations? Arti <br></br>can help you customize
                <br></br>reach, payload, or even<br></br>change actuators.
              </h1>
              <p className="aritbot_conntact_sub">
                We understand that each use case is unique, and <br></br>
                that stock grippers, arms, or even wingspans, don't<br></br>
                fit your use case. Arti works with teams to<br></br>
                customize robot systems, and can run builds<br></br>
                starting at just 4 units. Reach out to learn more.
              </p>
              <a href="mailto:hs.lee@adroit.co.kr">
                <button className="aritbot_contact_button">
                  <span>contact us</span>
                  <ChevronRight size={22} color="black" strokeWidth={1} />
                </button>
              </a>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection
          direction="up"
          duration={800}
          className="aritbot_img_card"
        >
          <li>
            <img src={AritBotImgCard1} alt="Card 1" />
          </li>
          <li>
            <img src={AritBotImgCard2} alt="Card 2" />
          </li>
          <li>
            <img src={AritBotImgCard3} alt="Card 3" />
          </li>
          <li>
            <img src={AritBotImgCard4} alt="Card 4" />
          </li>
          <li>
            <img src={AritBotImgCard5} alt="Card 5" />
          </li>
          <li>
            <img src={AritBotImgCard6} alt="Card 6" />
          </li>
        </FadeInSection>
        <FadeInSection
          className="aritbot_aboutus"
          direction="right"
          animation="blur-seq"
        >
          <div className="aritbot_aboutus_title">
            <p>About Us</p>
            <h1>
              Everything You Need<br></br> to Know About Arti Bot
            </h1>
          </div>
          <div className="faq_section">
            {faqData.map((faq, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div key={index} className="faq_item">
                  <button
                    className="faq_question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3>{faq.question}</h3>
                    <ChevronDown
                      size={32}
                      strokeWidth={1}
                      className={`faq_icon ${isOpen ? "rotated" : "normal"}`}
                    />
                  </button>
                  <div className={`faq_answer ${isOpen ? "open" : "closed"}`}>
                    <p>{faq.answer}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </FadeInSection>
        <div className="artibot_banner_wrap">
          <FadeInSection
            className="artibot_banner"
            direction="right"
            animation="blur-seq"
          >
            <div className="artibot_banner_title">
              <h1>Get a robot today and</h1>
              <h1>start building!</h1>
              <a href="/store">
                <button className="artibot_banner_button">
                  <p>Visit Store</p>
                  <div className="banner_visit_store_icon">
                    <ChevronRight size={28} color="black" strokeWidth={1} />
                  </div>
                </button>
              </a>
            </div>
            <div className="artibot_banner_text">
              <p>
                Check our store for latest builds and lead times. Our<br></br>
                robots are tested before being shipped out. We collect<br></br>
                duties ahead of time and help customers pay DDP<br></br>
                (delivered duties paid) to ensure smooth custom<br></br>
                clearance in destination countries.
              </p>
            </div>
          </FadeInSection>
        </div>
        <div className="artibot_footer">
          <div className="artibot_footer_header">
            <div className="artibot_footer_logo">
              {/* <img src={AdroitLogo} alt="" /> */}
              <h3>ARTI</h3>
            </div>
            <p>Fast Custom Robotics</p>
          </div>
          <div className="artibot_footer_img">
            <img src={AritbotImage5} alt="" />
          </div>
          <div className="artibot_footer_menu_wrap">
            <p>© 2019. All rights reserved. Adroit</p>
            <ul className="artibot_footer_menu">
              <li>
                <a href="/store">Store</a>
              </li>
              <li>
                <a href="https://github.com/ADROIT-source" target="_blank">Github</a>
              </li>
              <li>
                <a href="mailto:hs.lee@adroit.co.kr">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AritBot;
