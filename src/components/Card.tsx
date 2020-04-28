import React from "react";
import styles from "./Card.module.css";

interface CardProps {
	className?: string;
}

export const Card: React.FC<CardProps> = (props) => (
	<section className={`${styles.card} ${props.className ?? ""}`}>
		{props.children}
	</section>
);
