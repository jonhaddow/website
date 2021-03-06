/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";
import {
	Layout,
	NavBar,
	Header,
	Title,
	Card,
	SEO,
	SocialLinks,
} from "../components";
import Img from "gatsby-image";

import { mq } from "../utils/mediaQueries";
import { Mdx } from "../models";
import { MDXProvider } from "../components/mdx";

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
				description={post.frontmatter?.abstract ?? post.excerpt}
				image={
					post.frontmatter?.featuredImage?.childImageSharp?.original
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
				<SocialLinks />
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
					<MDXProvider body={post.body} />
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
			excerpt
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
							height
							width
						}
					}
				}
			}
		}
	}
`;
