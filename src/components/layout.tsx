import React from "react";

import "./layout.css";
import "normalize.css";
import Header from "./header";
import { NavBar } from "./NavBar";

interface LayoutProps {
	withHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ withHeader, children }) => {
	return (
		<>
			{withHeader && (
				<Header>
					<NavBar showProfileImage />
				</Header>
			)}
			{children}
		</>
	);
};

export default Layout;
