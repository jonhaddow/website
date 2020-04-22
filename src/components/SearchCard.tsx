import React from "react";
import { Card } from ".";
import styles from "./SearchCard.module.css";

export const SearchCard: React.FC = () => (
	<Card className={styles.card}>
		<form>
			<label className={styles.searchLabel} htmlFor="searchPosts">
				Search posts
			</label>
			<input className={styles.searchInput} id="searchPosts" />
		</form>
	</Card>
);
