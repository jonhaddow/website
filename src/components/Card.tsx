/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Card = (props: CardProps) => (
  <section
    css={{
      padding: "32px 48px",
      borderRadius: "8px",
      background: "var(--card)",
    }}
    {...props}
  >
    {props.children}
  </section>
);
