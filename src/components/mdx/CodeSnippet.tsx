/** @jsx jsx */
import { jsx } from "@emotion/core";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/dracula";
import lightTheme from "prism-react-renderer/themes/github";
import useDarkMode from "use-dark-mode";

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
				end
					? lineNumber >= start && lineNumber <= end
					: lineNumber === start
			);
			return inRange;
		};
	} else {
		return () => false;
	}
}

interface CodeProps {
	/**
	 * The code itself
	 */
	codeString: string;

	/**
	 * The programming language used for syntax highlighting
	 */
	language?: Language;

	/**
	 * Used for marking lines to highlight. E.g. `{2,4-6}`
	 */
	metastring?: string;
}

export const CodeSnippet: React.FC<CodeProps> = ({
	codeString,
	language = "javascript",
	metastring = "",
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
					<pre
						className={className}
						style={style}
						css={{
							padding: "16px 0",
						}}
					>
						{tokens.map((line, i) => (
							<div
								key={i}
								{...getLineProps({
									line,
									key: i,
								})}
								css={{
									padding: "0 16px",
									backgroundColor: shouldHighlightLine(i)
										? "var(--primary-transparent)"
										: undefined,
								}}
							>
								{line.map((token, key) => (
									<span
										key={key}
										{...getTokenProps({ token, key })}
									/>
								))}
							</div>
						))}
					</pre>
				</div>
			)}
		</Highlight>
	);
};
