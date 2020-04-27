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
import Img from "gatsby-image";
import { useQueryParam, StringParam } from "use-query-params";
import matchSorter from "match-sorter";

interface BlogProps {
	data: GatsbyTypes.BlogQuery;
}

const Blog: React.FC<BlogProps> = ({ data }) => {
	const [query] = useQueryParam("s", StringParam);

	let filteredPosts = data.allMarkdownRemark.edges;

	if (query) {
		filteredPosts = matchSorter(filteredPosts, query, {
			keys: ["node.frontmatter.title", "node.frontmatter.abstract"],
		});
	}

	return (
		<Layout>
			<SEO title="Blog" />
			<Header>
				<NavBar />
				<Title title="Blog" />
			</Header>
			<main>
				<SearchCard />
				<ul className={styles.postList}>
					{filteredPosts.map(({ node }) => (
						<li key={node.id} className={styles.postListItem}>
							<Link className={styles.postLink} to={node.fields?.slug ?? ""}>
								<Card className={styles.postCard}>
									<h3 className={styles.postTitle}>
										{node.frontmatter?.title}
									</h3>
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
									<Img
										className={styles.postImage}
										fluid={
											node.frontmatter?.featuredImage?.childImageSharp?.fluid
										}
									/>
								</Card>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</Layout>
	);
};

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
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 400) {
									...GatsbyImageSharpFluid
								}
							}
						}
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
