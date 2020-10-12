import React, { ReactElement } from "react";
import { MDXProvider as Mdx } from "@mdx-js/react";
import { preToCodeBlock } from "./helpers";
import { CodeSnippet } from ".";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface MDXProviderProps {
	body: string;
}

export const MDXProvider: React.FC<MDXProviderProps> = ({ body }) => (
	<Mdx
		components={{
			pre: (
				preProps: React.DetailedHTMLProps<
					React.HTMLAttributes<HTMLPreElement>,
					HTMLPreElement
				> & { children: ReactElement }
			) => {
				const props = preToCodeBlock(preProps);

				// if there's a codeString and some props, we passed the test
				if (props) {
					return <CodeSnippet {...props} />;
				} else {
					// it's possible to have a pre without a code in it
					return <pre {...preProps} />;
				}
			},
		}}
	>
		<MDXRenderer>{body}</MDXRenderer>
	</Mdx>
);
