import React from "react";
import styles from "./header.module.css";

export const Header: React.FC = ({ children }) => {
	return <header className={styles.header}>{children}</header>;
};
