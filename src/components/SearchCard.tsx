import React from "react";
import { Card } from ".";
import styles from "./SearchCard.module.css";
import { useQueryParam, StringParam } from "use-query-params";

interface SearchCardProps {
	className?: string;
}

export const SearchCard: React.FC<SearchCardProps> = ({ className = "" }) => {
	const [query, setQuery] = useQueryParam("s", StringParam);

	return (
		<Card className={`${styles.card} ${className}`}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label className={styles.searchLabel} htmlFor="searchPosts">
					Search posts
				</label>
				<input
					className={styles.searchInput}
					id="searchPosts"
					value={query ?? ""}
					onChange={(e) => setQuery(e.currentTarget.value || undefined)}
				/>
			</form>
		</Card>
	);
};
