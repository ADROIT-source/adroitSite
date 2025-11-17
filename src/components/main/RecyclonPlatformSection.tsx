import React, { useEffect, useState, useRef } from "react";
import "../../style/main/recyclonplatform.css";
import FadeInSection from "../../animations/ScrollFadeInSection";

import SaladybotVideo from "../../assets/video/recyclon_platform2.mp4";
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
    <div id="recyclonplat" className="RecyclonPlatformSection">
      <FadeInSection
        direction="up"
        duration={800}
        className="flex-direction-center RecyclonPlatformSection_text"
      >
        <div className="title_tag flex-center">
          <Recycle size={18} color="white" strokeWidth={2} />
          <span>기술 시연 영상</span>
        </div>
        <h1 className="recyclonplat_title">Recyclon platform</h1>
      </FadeInSection>
      <FadeInSection direction="up" duration={800}>
        <div className="container" id="recyclonplat_video_wrap">
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
