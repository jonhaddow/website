import React from "react";

import "./layout.css";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<ThemeSwitcher />
			{children}
		</>
	);
};
