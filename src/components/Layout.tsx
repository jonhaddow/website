import React, { useEffect } from "react";

import "../styles.css";

export const Layout: React.FC = ({ children }) => {
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
