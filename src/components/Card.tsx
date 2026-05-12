import * as React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export const Card = ({ className = "", ...rest }: CardProps) => (
  <section
    className={twMerge(
      "rounded-lg bg-card px-12 py-8 shadow-lg text-text",
      className,
    )}
    {...rest}
  />
);
