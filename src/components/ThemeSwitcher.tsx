/** @jsx jsx */
import { jsx } from "@emotion/core";
import LightIcon from "../assets/sun.svg";
import DarkIcon from "../assets/moon.svg";
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher: React.FC = () => {
	const darkMode = useDarkMode(false);

	return (
		<div
			css={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				top: "24px",
				right: "32px",
				height: "64px",
			}}
		>
			<button
				css={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "none",
					border: "none",
					color: "var(--header-text)",
					cursor: "pointer",
					padding: "5px",
					":focus": {
						outline: "solid var(--header-text) 1px",
					},
				}}
				title={darkMode.value ? "Light mode" : "Dark mode"}
				onClick={darkMode.toggle}
			>
				{darkMode.value ? <LightIcon /> : <DarkIcon />}
			</button>
		</div>
	);
};
