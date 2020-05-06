import React from "react";

import styles from "./Title.module.css";

interface TitleProps {
	title: string;
	subText?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subText }) => (
	<>
		<h2 className={styles.title}>
			{title} {subText && <span className={styles.subText}>{subText}</span>}
		</h2>
	</>
);
