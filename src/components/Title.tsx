/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { mq } from "../utils/mediaQueries";

interface TitleProps {
	title: string;
	subText?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subText }) => (
	<h2
		css={{
			width: "100%",
			maxWidth: "700px",
			margin: "0 auto",
			padding: "0 0 64px",
			fontWeight: 700,
			fontSize: "3rem",
			color: "var(--header-text)",
			textAlign: "center",
			[mq.desktop]: {
				textAlign: "left",
			},
		}}
	>
		{title}
		{subText && (
			<span
				css={{
					display: "block",
					paddingTop: "16px",
					fontSize: "0.9rem",
					fontWeight: 400,
					letterSpacing: "0.5px",
					color: "var(--header-text)",
				}}
			>
				{subText}
			</span>
		)}
	</h2>
);
