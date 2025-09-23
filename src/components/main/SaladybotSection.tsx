import React, { useEffect, useState, useRef } from "react";
import "../../style/main/saladybotvideo.css";
import FadeInSection from "../../animations/ScrollFadeInSection";

import SaladybotVideo from "../../assets/video/recyclon_platform.mp4";
import { Recycle } from "lucide-react";

const SaladyBotVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoEl.play();
                    } else {
                        videoEl.pause();
                    }
                });
            },
            { threshold: 0.5 } // 50% 이상 보여야 동작
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
          <Recycle size={18} color="white" strokeWidth={2} />
          <span>기술 시연 영상</span>
        </div>
        <h1 className="saladybotvideo_title">Recyclon platform</h1>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="container" id="salady_bot_video_wrap">
                <video
                    ref={videoRef}
                    src={SaladybotVideo}
                    muted
                    playsInline
                    controls={true}
                />
        </div>
      </FadeInSection>
    </div>
  );
};

export default SaladyBotVideo;
