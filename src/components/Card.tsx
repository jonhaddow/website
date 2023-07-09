import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export const Card = ({ className = "", children, ...rest }: CardProps) => (
  <section
    className={`${className} rounded-lg bg-white px-12 py-8 shadow-lg`}
    {...rest}
  >
    {children}
  </section>
);
