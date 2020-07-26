/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Header: React.FC = ({ children }) => {
	return (
		<header
			css={{
				background: "var(--header-bg)",
				color: "#fdfdfd",
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
