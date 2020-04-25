import React from "react";
import { graphql } from "gatsby";
import { Layout, NavBar, Header, Title, Card } from "../components";

import styles from "./post.module.css";

interface PostProps {
	data: GatsbyTypes.PostQuery;
}

const Post: React.FC<PostProps> = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<Header>
				<NavBar />
				<Title title={post?.frontmatter?.title ?? ""} />
			</Header>
			<Card className={styles.articleCard}>
				<div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
			</Card>
		</Layout>
	);
};

export default Post;

export const postQuery = graphql`
	query Post($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
