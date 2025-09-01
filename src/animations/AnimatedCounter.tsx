import React, { useEffect, useState, useRef } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  suffix?: string;
  fontSize?: string | number;
  margin?: string;
  className?: string;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  suffix = "",
  fontSize = "2rem",
  margin = "10px 0",
  className,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current; // ✅ ref 복사

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          const startTime = Date.now();
          const stepTime = 16;

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
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(currentElement);

    // ✅ cleanup에서 ref.current 대신 변수 사용
    return () => {
      observer.unobserve(currentElement);
    };
  }, [target, duration, hasAnimated]);

  return (
    <h1
      ref={elementRef}
      className={className}
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
