/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <header
      css={{
        background: "var(--header-bg)",
        color: "#fdfdfd",
        paddingBottom: 64,
        a: {
          ":focus": {
            outline: "2px var(--header-text) solid",
          },
        },
      }}
    >
      {children}
    </header>
  );
};
