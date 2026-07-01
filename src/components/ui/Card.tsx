import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white/4 border border-white/8 rounded-2xl p-6 ${
        hover ? "hover:-translate-y-1 hover:border-white/15 transition-all duration-200 cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
