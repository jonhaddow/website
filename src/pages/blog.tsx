import React from "react";

import {
	Card,
	Layout,
	NavBar,
	Header,
	SEO,
	SearchCard,
	Title,
} from "../components";

import styles from "./blog.module.css";
import { Link, graphql } from "gatsby";

interface BlogProps {
	data: GatsbyTypes.BlogQuery;
}

const Blog: React.FC<BlogProps> = ({ data }) => (
	<Layout>
		<SEO title="Blog" />
		<Header>
			<NavBar />
			<Title title="Blog" />
		</Header>
		<main>
			<SearchCard />
			<ul className={styles.postList}>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<li key={node.id} className={styles.postListItem}>
						<Link className={styles.postLink} to={node.fields?.slug ?? ""}>
							<Card className={styles.postCard}>
								<h3 className={styles.postTitle}>{node.frontmatter?.title}</h3>
								<span className={styles.postDetail}>
									<time>{node.frontmatter?.date}</time> -{" "}
									{node.timeToRead && (
										<>
											{node.timeToRead}{" "}
											{node.timeToRead > 1 ? "minutes" : "minute"}
										</>
									)}
								</span>
								<p className={styles.postDescription}>
									{node.frontmatter?.abstract}
								</p>
								<img
									className={styles.postImage}
									src="https://via.placeholder.com/1500"
									alt=""
								/>
							</Card>
						</Link>
					</li>
				))}
			</ul>
		</main>
	</Layout>
);

export default Blog;

export const query = graphql`
	query Blog {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						title
						abstract
						date(formatString: "MMMM DD, YYYY")
					}
					fields {
						slug
					}
					timeToRead
				}
			}
		}
	}
`;
