import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Main from "./Page/main";
import SaladyBot from "./Page/SaladyBot";
import AritBot from "./Page/ArtiBot";
import Store from "./Page/Store";
import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // Lenis를 window 객체에 저장하여 Bar.tsx에서 접근 가능
    (window as any).lenis = lenis;

    // 메타데이터 설정 함수
    const setMeta = (nameOrProp: string, content: string, isProperty = false) => {
      let selector = isProperty ? `meta[property="${nameOrProp}"]` : `meta[name="${nameOrProp}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        if (isProperty) element.setAttribute("property", nameOrProp);
        else element.setAttribute("name", nameOrProp);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 페이지별 메타데이터 설정
    if (location.pathname === "/saladybot") {
      document.title = "샐러디봇: AI 기반 초개인화 샐러드 자동화 | ㈜애드로이트";
      setMeta("description", "샐러디봇은 LLM과 비전 기반 지능형 로봇으로 개인의 건강 데이터와 취향을 분석해 맞춤형 샐러드를 제조하는 혁신적인 자동화 솔루션입니다.");
      setMeta("keywords", "샐러디봇, AI 로봇, 초개인화 샐러드, 6축 양팔 로봇, AI 비전, 스마트 팩토리");
      setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
      setMeta("canonical", "https://www.adroit.co.kr/saladybot", true);
      // Open Graph
      setMeta("og:locale", "ko_KR", true);
      setMeta("og:type", "website", true);
      setMeta("og:site_name", "㈜애드로이트 | ADROIT", true);
      setMeta("og:url", "https://www.adroit.co.kr/saladybot", true);
      setMeta("og:title", "샐러디봇: AI 기반 초개인화 샐러드 자동화 | ㈜애드로이트", true);
      setMeta("og:description", "LLM과 비전 기술로 개인 맞춤 샐러드를 제조하는 샐러디봇. 6축 양팔 로봇과 데이터 기반 최적화로 생산성과 품질을 극대화.", true);
      setMeta("og:image", "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_saladybot.png", true);
      setMeta("og:image:alt", "샐러디봇 AI 로봇 시스템 이미지", true);
      setMeta("og:image:width", "1200", true);
      setMeta("og:image:height", "630", true);
      setMeta("og:image:type", "image/png", true);
      // Twitter
      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:title", "샐러디봇: AI 기반 초개인화 샐러드 자동화 | ㈜애드로이트");
      setMeta("twitter:description", "LLM과 비전 기술로 개인 맞춤 샐러드를 제조하는 샐러디봇. 6축 양팔 로봇과 데이터 기반 최적화 솔루션.");
      setMeta("twitter:image", "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_saladybot.png");
      setMeta("twitter:image:alt", "샐러디봇 AI 로봇 시스템 이미지");
      setMeta("twitter:site", "@AdroitCorp");
      // JSON-LD
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "샐러디봇",
        url: "https://www.adroit.co.kr/saladybot",
        image: "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_saladybot.png",
        description: "샐러디봇은 LLM과 비전 기술로 개인 맞춤 샐러드를 제조하는 지능형 로봇 시스템입니다. 6축 양팔 로봇과 데이터 기반 최적화로 스마트 팩토리를 구현.",
        brand: {
          "@type": "Brand",
          name: "㈜애드로이트",
        },
        manufacturer: {
          "@type": "Organization",
          name: "㈜애드로이트",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+82-70-8810-5612",
              email: "adroit@adroit.co.kr",
              areaServed: "KR",
              availableLanguage: ["ko"],
            },
          ],
        },
        sameAs: [
          "https://www.linkedin.com/company/adroit",
          "https://twitter.com/AdroitCorp",
        ],
      }, null, 2);
      document.head.appendChild(script);
    } else {
      document.title = "혁신적인 로봇 시스템 통합 솔루션 | ㈜애드로이트";
      setMeta("description", "㈜애드로이트는 지능형 로봇·AI 자동화, AI 비전 검사/딥러닝 분류, 2D/3D 시뮬레이션(OLP), AMR 및 Recyclon 재활용 분류 로봇까지 맞춤형 시스템 통합으로 생산성·품질·ESG를 향상합니다.");
      setMeta("keywords", "지능형 로봇, AI 자동화, AI 비전, 딥러닝, 2D/3D 시뮬레이션, AMR, Recyclon, 스마트 팩토리");
      setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
      setMeta("canonical", "https://www.adroit.co.kr/", true);
      // Open Graph
      setMeta("og:locale", "ko_KR", true);
      setMeta("og:type", "website", true);
      setMeta("og:site_name", "애드로이트 | ADROIT", true);
      setMeta("og:url", "https://www.adroit.co.kr/", true);
      setMeta("og:title", "혁신적인 로봇 시스템 통합 솔루션 | ㈜애드로이트", true);
      setMeta("og:description", "지능형 로봇과 AI 자동화로 스마트한 생산 환경을 구현합니다. AI 비전·딥러닝 분류, 2D/3D 시뮬레이션(OLP), AMR, Recyclon 등 맞춤형 통합 솔루션.", true);
      setMeta("og:image", "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_dark_classy_2.png", true);
      setMeta("og:image:alt", "애드로이트 로봇 시스템 통합 및 AI 자동화 이미지", true);
      setMeta("og:image:width", "1200", true);
      setMeta("og:image:height", "630", true);
      setMeta("og:image:type", "image/png", true);
      setMeta("og:image", "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874c09da758d398f05aa0dc_midjourney-editor-1752466011198.png", true);
      setMeta("og:image:alt", "애드로이트 로봇 시스템 통합 보조 이미지", true);
      setMeta("og:image:width", "1200", true);
      setMeta("og:image:height", "630", true);
      setMeta("og:image:type", "image/png", true);
      // Twitter
      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:title", "혁신적인 로봇 시스템 통합 솔루션 | ㈜애드로이트");
      setMeta("twitter:description", "AI 비전·딥러닝 분류, 2D/3D 시뮬레이션(OLP), AMR, Recyclon 등 맞춤형 로봇·AI 통합 솔루션.");
      setMeta("twitter:image", "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_dark_classy_2.png");
      setMeta("twitter:image:alt", "애드로이트 로봇 시스템 통합 및 AI 자동화 이미지");
      setMeta("twitter:site", "@AdroitCorp");
      // JSON-LD
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "애드로이트",
        url: "https://www.adroit.co.kr/",
        logo: "https://cdn.prod.website-files.com/6874b1bc483ad88f0211b655/6874b72f00f201a6eb9e64cc_adroit_dark_classy_2.png",
        description: "지능형 로봇과 AI 자동화 솔루션을 설계·개발·구축하는 로봇 시스템 통합 기업. AI 비전 검사, 딥러닝 분류, 2D/3D 시뮬레이션(OLP), AMR, 재활용 분류 로봇(Recyclon) 제공.",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+82-70-8810-5612",
            email: "adroit@adroit.co.kr",
            areaServed: "KR",
            availableLanguage: ["ko"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/adroit",
          "https://twitter.com/AdroitCorp",
        ],
      }, null, 2);
      document.head.appendChild(script);
    }

    // 기본 메타 태그
    const charsetMeta = document.head.querySelector('meta[charset]');
    if (!charsetMeta) {
      const meta = document.createElement("meta");
      meta.setAttribute("charset", "utf-8");
      document.head.appendChild(meta);
    }
    setMeta("viewport", "width=device-width, initial-scale=1");

    // Lenis cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saladybot" element={<SaladyBot />} />
        <Route path="/artibot" element={<AritBot />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;