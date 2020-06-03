import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/dracula";
import lightTheme from "prism-react-renderer/themes/github";
import useDarkMode from "use-dark-mode";
import styles from "./Code.module.css";

const RE = /{([\d,-]+)}/;

function calculateLinesToHighlight(meta: string): (index: number) => boolean {
	const match = RE.exec(meta);
	if (match && match[1]) {
		const lineNumbers = match[1]
			.split(",")
			.map((v) => v.split("-").map((y) => parseInt(y, 10)));
		return (index: number): boolean => {
			const lineNumber = index + 1;
			const inRange = lineNumbers.some(([start, end]) =>
				end ? lineNumber >= start && lineNumber <= end : lineNumber === start
			);
			return inRange;
		};
	} else {
		return () => false;
	}
}

export interface CodeProps {
	codeString: string;
	language: Language;
	metastring: string;
}

export const Code: React.FC<CodeProps> = ({
	codeString,
	language,
	metastring,
}) => {
	const shouldHighlightLine = calculateLinesToHighlight(metastring);
	const darkMode = useDarkMode();

	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			theme={darkMode.value ? darkTheme : lightTheme}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<div>
					<pre className={`${className} ${styles.pre}`} style={style}>
						{tokens.map((line, i) => (
							<div
								key={i}
								{...getLineProps({
									line,
									key: i,
									className: shouldHighlightLine(i)
										? styles.highlighted
										: styles.line,
								})}
							>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				</div>
			)}
		</Highlight>
	);
};
