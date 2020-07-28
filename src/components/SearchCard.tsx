/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { Card } from ".";
import { useQueryParam, StringParam } from "use-query-params";
import { mq } from "../utils/mediaQueries";

export const SearchCard: React.FC = (props) => {
	const [query, setQuery] = useQueryParam("s", StringParam);
	const [input, setInput] = useState(query);

	return (
		<Card
			css={{
				width: "100%",
				maxWidth: "700px",
				margin: "-32px auto 0",
				borderRadius: "0",
				[mq.desktop]: {
					borderRadius: "8px",
				},
			}}
			{...props}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label
					css={{
						display: "block",
						marginBottom: "32px",
						fontSize: "1.4rem",
						fontWeight: 400,
						fontFamily: "var(--serif-font)",
					}}
					htmlFor="searchPosts"
				>
					Search posts
				</label>
				<input
					css={{
						height: "48px",
						width: "100%",
						padding: "4px 16px",
						display: "block",
						marginTop: "12px",
						background: "transparent",
						borderRadius: "16px",
						border: "1px var(--text-lighter) solid",
						lineHeight: "32px",
						color: "var(--text-light)",
						"&:focus": {
							border: "3px var(--primary) solid",
							outline: "none",
						},
					}}
					id="searchPosts"
					value={input ?? ""}
					onChange={(e) => {
						const newInput = e.currentTarget.value;
						setInput(newInput);
						setQuery(newInput || undefined, "replace");
					}}
				/>
			</form>
		</Card>
	);
};
