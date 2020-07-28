/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Card: React.FC = (props) => (
	<section
		css={{
			padding: "32px 48px",
			borderRadius: "8px",
			background: "var(--card)",
		}}
		{...props}
	>
		{props.children}
	</section>
);
