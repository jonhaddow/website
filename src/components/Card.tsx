/** @jsx jsx */
import { jsx } from "@emotion/core";

interface CardProps {
	className?: string;
}

export const Card: React.FC<CardProps> = (props) => (
	<section
		className={`${props.className ?? ""}`}
		css={{
			padding: "32px 48px",
			borderRadius: "8px",
			background: "var(--card)",
		}}
	>
		{props.children}
	</section>
);
