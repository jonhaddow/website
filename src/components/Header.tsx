import * as React from "react";

interface HeaderProps {
  children: React.ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="bg-primary pb-16 text-header-text">{children}</header>
  );
};
