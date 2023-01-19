import React, { ReactNode, useEffect } from "react";

import "../styles.css";
import "../prism-theme.css";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  // Add analytics to the end of the document
  useEffect(() => {
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://static.cloudflareinsights.com/beacon.min.js"
    );

    script.setAttribute(
      "data-cf-beacon",
      '{"token": "afd8b37af7cb4ff29b3a5d1a70976ead"}'
    );

    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
};
