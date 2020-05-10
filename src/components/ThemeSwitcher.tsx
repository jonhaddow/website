import React from "react";
import LightIcon from "../assets/sun.svg";
import DarkIcon from "../assets/moon.svg";
import styles from "./ThemeSwitcher.module.css";
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher: React.FC = () => {
	const darkMode = useDarkMode(false);

	console.log(darkMode.value);

	return (
		<button className={styles.button} onClick={darkMode.toggle}>
			{darkMode.value ? <LightIcon /> : <DarkIcon />}
		</button>
	);
};
