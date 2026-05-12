import * as React from "react";

import "../styles.css";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  // Add analytics to the end of the document
  React.useEffect(() => {
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://static.cloudflareinsights.com/beacon.min.js",
    );

    script.setAttribute(
      "data-cf-beacon",
      '{"token": "afd8b37af7cb4ff29b3a5d1a70976ead"}',
    );

    document.body.appendChild(script);
  }, []);

  return (
    <div id="layout" className="min-h-screen bg-background">
      {children}
    </div>
  );
};
