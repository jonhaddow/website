import React, { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Card = ({ className = "", children, ...rest }: CardProps) => (
  <section
    className={`${className} shadow-lg py-8 px-12 bg-white rounded-lg`}
    {...rest}
  >
    {children}
  </section>
);
