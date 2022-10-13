import React, { ReactElement } from "react";
import { Language } from "prism-react-renderer";

interface PreProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLPreElement>,
		HTMLPreElement
	> {
	children?: ReactElement;
	metaString?: string;
}

export function preToCodeBlock(
	preProps: PreProps
):
	| ({
			codeString: string;
			className: string;
			language: Language | undefined;
	  } & React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
	  >)
	| undefined {
	if (preProps?.children?.props?.mdxType === "code") {
		// we have a <pre><code> situation
		const { children: codeString, className = "", ...props } = preProps
			.children.props as React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		>;

		const matches = /language-(?<lang>.*)/.exec(className);

		return {
			codeString: (codeString as string).trim(),
			className,
			language: matches?.groups?.lang
				? (matches.groups.lang as Language)
				: undefined,
			...props,
		};
	}
}
