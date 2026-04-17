import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

const ScrollReveal = ({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn(
        isVisible ? "animate-reveal-up" : "opacity-0",
        className
      )}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined, animationFillMode: "both" }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
