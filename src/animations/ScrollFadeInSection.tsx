import React, { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; // 슬라이드 방향
  duration?: number; // 애니메이션 시간(ms)
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  direction = "up",
  duration = 600,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 한 번만 실행
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // 방향별 초기 위치
  const translateMap: Record<string, string> = {
    up: "translateY(20px)",
    down: "translateY(-20px)",
    left: "translateX(20px)",
    right: "translateX(-20px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : translateMap[direction],
        transition: `all ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
