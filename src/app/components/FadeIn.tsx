import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";

type FadeInProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  whenInView?: boolean;
  variant?: "up" | "fade" | "scale";
};

export function FadeIn({
  as: Component = "div",
  children,
  className = "",
  style,
  delay = 0,
  duration,
  whenInView = false,
  variant = "up",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(!whenInView);

  useEffect(() => {
    if (!whenInView) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [whenInView]);

  const timingStyle: CSSProperties = {
    ...style,
    animationDelay: delay ? `${delay}s` : undefined,
    transitionDelay: whenInView && delay ? `${delay}s` : undefined,
    animationDuration: duration ? `${duration}s` : undefined,
    transitionDuration: whenInView && duration ? `${duration}s` : undefined,
  };

  const componentRef = ref as Ref<HTMLElement>;

  if (whenInView) {
    const viewClass =
      variant === "scale" ? "fade-in-view-scale" : "fade-in-view";
    return (
      <Component
        ref={componentRef}
        className={`${viewClass}${visible ? " is-visible" : ""} ${className}`.trim()}
        style={timingStyle}
      >
        {children}
      </Component>
    );
  }

  const animClass =
    variant === "scale"
      ? "animate-fade-in-scale"
      : variant === "fade"
        ? "animate-fade-in"
        : "animate-fade-in-up";

  return (
    <Component
      ref={componentRef}
      className={`${animClass} ${className}`.trim()}
      style={timingStyle}
    >
      {children}
    </Component>
  );
}
