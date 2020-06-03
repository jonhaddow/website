import React from "react";
import { graphql } from "gatsby";
import { Layout, NavBar, Header, Title, Card, SEO } from "../components";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import styles from "./article.module.css";

interface PostProps {
	data: GatsbyTypes.ArticleQuery;
}

const Article: React.FC<PostProps> = ({ data }) => {
	const post = data.mdx;
	if (!post) return null;
	return (
		<Layout>
			<SEO
				title={post.frontmatter?.title ?? ""}
				description={post.frontmatter?.abstract}
				image={post.frontmatter?.featuredImage?.childImageSharp?.original?.src}
			/>
			<Header>
				<NavBar />
				<Title
					title={post.frontmatter?.title ?? ""}
					subText={
						post.frontmatter?.date &&
						`${post.frontmatter?.date} - ${post?.timeToRead} ${
							post.timeToRead && post.timeToRead > 1 ? "minutes" : "minute"
						}`
					}
				/>
			</Header>
			<Card className={styles.articleCard}>
				{post.frontmatter?.featuredImage?.childImageSharp?.fluid && (
					<Img
						className={styles.featuredImage}
						fluid={post.frontmatter?.featuredImage?.childImageSharp?.fluid}
					/>
				)}
				<p className={styles.abstract}>{post.frontmatter?.abstract}</p>
				<MDXProvider>
					<MDXRenderer>{post.body}</MDXRenderer>
				</MDXProvider>
			</Card>
		</Layout>
	);
};

export default Article;

export const postQuery = graphql`
	query Article($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			body
			timeToRead
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