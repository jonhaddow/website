import React from "react";
import LightIcon from "../assets/sun.svg";
import DarkIcon from "../assets/moon.svg";
import styles from "./ThemeSwitcher.module.css";
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher: React.FC = () => {
	const darkMode = useDarkMode(false);

	return (
		<div className={styles.wrapper}>
			<button
				title={darkMode.value ? "Light mode" : "Dark mode"}
				className={styles.button}
				onClick={darkMode.toggle}
			>
				{darkMode.value ? <LightIcon /> : <DarkIcon />}
			</button>
		</div>
	);
};
