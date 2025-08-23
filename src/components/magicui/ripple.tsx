import React from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = React.memo<RippleProps>(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i: number) => {
        const size: number = mainCircleSize + i * 70;
        const opacity: number = mainCircleOpacity - i * 0.03;
        const animationDelay: string = `${i * 0.06}s`;
        const borderStyle: string = "solid";

        const circleStyle: React.CSSProperties & { "--i": number } = {
          "--i": i,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animationDelay,
          borderStyle,
          borderWidth: "1px",
          borderColor: `var(--foreground)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
        };

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl`}
            style={circleStyle}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";