/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import { Layout, NavBar, Header, Title, Card, SEO, Code } from "../components";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { preToCodeBlock } from "../components/mdx/helpers";
import { mq } from "../utils/mediaQueries";
import { Mdx } from "../models";

interface PostProps {
	data: {
		mdx: Mdx;
	};
}

const Article: React.FC<PostProps> = ({ data }) => {
	const post = data.mdx;
	if (!post) return null;
	return (
		<Layout>
			<SEO
				title={post.frontmatter?.title ?? ""}
				description={post.frontmatter?.abstract}
				image={
					post.frontmatter?.featuredImage?.childImageSharp?.original
						?.src
				}
			/>
			<Header>
				<NavBar />
				<Title
					title={post.frontmatter?.title ?? ""}
					subText={
						post.frontmatter?.date &&
						`${post.frontmatter?.date} - ${post?.timeToRead} ${
							post.timeToRead && post.timeToRead > 1
								? "minutes"
								: "minute"
						}`
					}
				/>
			</Header>
			<main>
				<Card
					css={{
						width: "100%",
						maxWidth: 900,
						borderRadius: 0,
						margin: "-32px auto 0",
						[mq.desktop]: {
							borderRadius: 8,
							marginBottom: 64,
						},
					}}
				>
					{post.frontmatter?.featuredImage?.childImageSharp
						?.fluid && (
						<Img
							css={{
								marginBottom: 32,
								borderRadius: 8,
							}}
							fluid={
								post.frontmatter?.featuredImage?.childImageSharp
									?.fluid
							}
						/>
					)}
					<p
						css={{
							fontWeight: 200,
							color: "var(--text-lighter)",
							fontStyle: "italic",
						}}
					>
						{post.frontmatter?.abstract}
					</p>
					<MDXProvider
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
									return <Code {...props} />;
								} else {
									// it's possible to have a pre without a code in it
									return <pre {...preProps} />;
								}
							},
						}}
					>
						<MDXRenderer>{post.body}</MDXRenderer>
					</MDXProvider>
					<p
						css={{
							textAlign: "right",
						}}
					>
						<a
							css={{ color: "var(--text-lighter)" }}
							href={post.fields?.editLink}
						>
							Edit this post on GitHub
						</a>
					</p>
				</Card>
			</main>
		</Layout>
	);
};

export default Article;

export const postQuery = graphql`
	query Article($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			body
			timeToRead
			fields {
				editLink
			}
			frontmatter {
				title
				abstract
				date(formatString: "MMMM DD, YYYY")
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 900) {
							...GatsbyImageSharpFluid
						}
						original {
							src
						}
					}
				}
			}
		}
	}
`;
