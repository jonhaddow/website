import React from "react";
import { graphql } from "gatsby";
interface PostProps {
	data: GatsbyTypes.PostQuery;
}

const Post: React.FC<PostProps> = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div>
			<h1>{post?.frontmatter?.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
		</div>
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
