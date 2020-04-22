import React from "react";

import styles from "./Title.module.css";

interface TitleProps {
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => (
	<h2 className={styles.title}>{title}</h2>
);
