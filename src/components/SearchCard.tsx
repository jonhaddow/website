import React from "react";
import { Card } from ".";
import styles from "./SearchCard.module.css";

interface SearchCardProps {
	className?: string;
}

export const SearchCard: React.FC<SearchCardProps> = ({ className = "" }) => (
	<Card className={`${styles.card} ${className}`}>
		<form>
			<label className={styles.searchLabel} htmlFor="searchPosts">
				Search posts
			</label>
			<input className={styles.searchInput} id="searchPosts" />
		</form>
	</Card>
);
