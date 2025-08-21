// AnimatedCounter.tsx
import React, { useEffect, useState, useRef } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  suffix?: string;
  fontSize?: string | number; // 추가: 폰트 크기
  margin?: string; // 추가: margin
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  suffix = "",
  fontSize = "2rem", // 기본값
  margin = "10px 0", // 기본값
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          const startTime = Date.now();
          const stepTime = 16; // 약 60fps

          const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.ceil(target * easedProgress);

            setCount(currentValue);

            if (progress >= 1) {
              setCount(target);
              clearInterval(timer);
            }
          }, stepTime);

          setHasAnimated(true);

          return () => clearInterval(timer);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [target, duration, hasAnimated]);

  return (
    <h1
      ref={elementRef}
      style={{
        fontSize,
        margin,
      }}
    >
      {count.toLocaleString() + suffix}
    </h1>
  );
};

export default AnimatedCounter;
