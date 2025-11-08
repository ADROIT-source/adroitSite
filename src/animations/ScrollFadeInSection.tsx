import React, { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  animation?: "fade" | "slide" | "blur" | "scale" | "blur-seq"; // ✅ 추가됨
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  direction = "up",
  duration = 600,
  animation = "slide",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // ✅ 방향 이동 설정
  const translateMap: Record<string, string> = {
    up: "translateY(20px)",
    down: "translateY(-20px)",
    left: "translateX(20px)",
    right: "translateX(-20px)",
  };

  let initialStyle: React.CSSProperties = { opacity: 0 };
  let finalStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translate(0,0)",
    filter: "blur(0px)",
  };

  switch (animation) {
    case "fade":
      initialStyle.opacity = 0;
      finalStyle.opacity = 1;
      break;

    case "slide":
      initialStyle.transform = translateMap[direction];
      break;

    case "blur":
      initialStyle.filter = "blur(10px)";
      break;

    case "scale":
      initialStyle.transform = "scale(0.95)";
      finalStyle.transform = "scale(1)";
      break;
  }

  // ✅ 새로운 blur-seq (문장별 순차 등장)
  if (animation === "blur-seq") {
    return (
      <div ref={ref} className={`${className}`}>
        {React.Children.map(children, (child, i) => (
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              filter: isVisible ? "blur(0px)" : "blur(10px)",
              transition: `all ${duration}ms ease-out`,
              transitionDelay: `${i * 150}ms`, // ✅ 순차 딜레이
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!isVisible ? initialStyle : finalStyle),
        transition: `all ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
