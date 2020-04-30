import React from "react";
import { graphql } from "gatsby";
import { Layout, NavBar, Header, Title, Card, SEO } from "../components";
import Img from "gatsby-image";

import styles from "./article.module.css";

interface PostProps {
	data: GatsbyTypes.ArticleQuery;
}

const Article: React.FC<PostProps> = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<SEO title={post?.frontmatter?.title ?? ""} />
			<Header>
				<NavBar />
				<Title title={post?.frontmatter?.title ?? ""} />
			</Header>
			<Card className={styles.articleCard}>
				{post?.frontmatter?.featuredImage?.childImageSharp?.fluid && (
					<Img
						className={styles.featuredImage}
						fluid={post?.frontmatter?.featuredImage?.childImageSharp?.fluid}
					/>
				)}
				<div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
			</Card>
		</Layout>
	);
};

export default Article;

export const postQuery = graphql`
	query Article($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 900) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
