/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { Fragment } from "react";

import {
	Card,
	Layout,
	NavBar,
	Header,
	SEO,
	SearchCard,
	Title,
} from "../components";

import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { useQueryParam, StringParam } from "use-query-params";
import matchSorter from "match-sorter";
import { AllMdx } from "../models";

interface BlogProps {
	data: {
		allMdx: AllMdx;
	};
}

const Blog: React.FC<BlogProps> = ({ data }) => {
	const [query] = useQueryParam("s", StringParam);

	let filteredPosts = data.allMdx.edges;

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
				<ul
					css={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(min(400px, 100%), 1fr))",
						gridGap: "1rem",
						margin: "32px",
						padding: "0",
						listStyle: "none",
					}}
				>
					{filteredPosts.map(({ node }) => (
						<li key={node.id}>
							<Link
								css={{
									height: "100%",
									display: "block",
									textDecoration: "none",
									color: "var(--text)",
									outline: "none",
								}}
								to={`/blog/${node.frontmatter?.slug}`}
							>
								<Card
									css={{
										display: "flex",
										flexDirection: "column",
										height: "100%",
										padding: "0",
									}}
								>
									<h3
										css={{
											margin: "0 0 12px",
											padding: "32px 48px 0",
											fontWeight: 400,
											fontSize: "1.6rem",
											color: "var(--text)",
										}}
									>
										{node.frontmatter?.title}
									</h3>
									<span
										css={{
											padding: "0 48px",
											fontWeight: 300,
											color: "var(--text)",
										}}
									>
										<time>{node.frontmatter?.date}</time> -{" "}
										{node.timeToRead && (
											<Fragment>
												{node.timeToRead}{" "}
												{node.timeToRead > 1
													? "minutes"
													: "minute"}
											</Fragment>
										)}
									</span>
									<p
										css={{
											margin: 0,
											padding: "12px 48px 24px",
											fontWeight: 400,
											fontSize: "1.2rem",
											color: "var(--text-lighter)",
											lineHeight: "1.6rem",
										}}
									>
										{node.frontmatter?.abstract}
									</p>
									{node.frontmatter?.featuredImage && (
										<Img
											css={{
												width: "100%",
												height: "120px",
												flexGrow: 1,
												display: "block",
												objectFit: "cover",
												borderRadius: "0 0 5px 5px",
											}}
											fluid={
												node.frontmatter?.featuredImage
													?.childImageSharp?.fluid
											}
										/>
									)}
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
		allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			filter: { fields: { type: { eq: "posts" } } }
		) {
			edges {
				node {
					id
					frontmatter {
						slug
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
					timeToRead
				}
			}
		}
	}
`;
