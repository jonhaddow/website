import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="bg-primary pb-16 text-header-text">{children}</header>
  );
};
