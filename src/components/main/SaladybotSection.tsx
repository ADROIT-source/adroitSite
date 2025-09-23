import React, { useEffect, useState, useRef } from "react";
import "../../style/main/saladybotvideo.css";
import FadeInSection from "../../animations/ScrollFadeInSection";

import SaladybotVideo from "../../assets/video/saladybot.mp4";

import { Salad } from "lucide-react";

const SaladyBotVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !videoEl.paused) {
            // ✅ 재생 중인데 화면에서 벗어나면 자동 멈춤
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="saladybotvideo" className="SaladybotvideoSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center SaladybotvideoSection_text"
      >
        <div className="title_tag flex-center">
          <Salad size={18} color="white" strokeWidth={2} />
          <span>인공지능 챔피언스 대회</span>
        </div>
        <h1 className="saladybotvideo_title">Salady Bot</h1>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="container" id="salady_bot_video_wrap">
          <video ref={videoRef} src={SaladybotVideo} playsInline controls />
        </div>
      </FadeInSection>
    </div>
  );
};

export default SaladyBotVideo;
