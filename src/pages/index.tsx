/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import { Card, Layout, SEO } from "../components";
import { mq } from "../utils/mediaQueries";

interface IndexProps {
	data: GatsbyTypes.HomeQuery;
}

const Home: React.FC<IndexProps> = ({ data }) => {
	const cardStyles = css({
		width: "90%",
		maxWidth: "700px",
		margin: "0 auto 64px",
	});
	const viewMore = css({
		textDecoration: "none",
		"&:hover, &:focus, &:active": {
			textDecoration: "underline",
		},
	});
	return (
		<Layout>
			<SEO title="Home" />
			<header
				css={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "48px 0 64px",
					background: "var(--header-bg)",
					color: "var(--header-text)",
				}}
			>
				<div
					css={{
						width: "100%",
						maxWidth: "450px",
						display: "flex",
						flexDirection: "column-reverse",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "32px 16px",

						[mq.desktop]: {
							flexDirection: "row",
						},
					}}
				>
					<div
						css={{
							display: "flex",
							flexDirection: "column",

							[mq.desktop]: {
								marginRight: 32,
							},
						}}
					>
						<h1
							css={{
								margin: "24px 0 0",
								fontSize: "2rem",
								textAlign: "center",
								letterSpacing: "1px",

								[mq.desktop]: {
									margin: 0,
									textAlign: "left",
								},
							}}
						>
							Jon Haddow
						</h1>
						<p
							css={{
								margin: "12px 0 0",
								fontWeight: 300,
								fontSize: "1.2rem",
								textAlign: "center",

								[mq.desktop]: {
									textAlign: "left",
								},
							}}
						>
							Web Developer
						</p>
						<nav>
							<ul
								css={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									margin: "32px 0 0",
									padding: "0 8px",

									[mq.desktop]: {
										justifyContent: "start",
										padding: 0,
									},
								}}
							>
								{[
									{ text: "About", link: "/about" },
									{ text: "Blog", link: "/blog" },
								].map((x) => (
									<li
										key={x.link}
										css={{
											display: "inline",
											marginRight: 16,
											"&:last-child": { marginRight: 0 },
										}}
									>
										<Link
											css={{
												padding: "8px 12px",
												color: "var(--header-text)",
												textDecoration: "none",
												borderRadius: "4px",
												border:
													"solid var(--header-text) 1px",
												fontSize: "1.2rem",
												opacity: "0.9",
												transition:
													"opacity var(--animation-speed), background var(--animation-speed)",

												"&:focus, &:active, &:hover": {
													background:
														"rgba(100, 100, 100, 0.2)",
													outline: "none",
													opacity: 1,
												},
											}}
											to={x.link}
										>
											{x.text}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<Img
						css={{
							height: "140px",
							width: "140px",
							borderRadius: "50%",
						}}
						fluid={data.placeholderImage?.childImageSharp?.fluid}
					/>
				</div>
			</header>
			<Card css={[cardStyles, { marginTop: -64 }]}>
				<p>
					I am a full stack web developer that builds quality,
					scalable web applications. I work primarily with React,
					TypeScript and .NET.
				</p>
				<Link css={viewMore} to="/about">
					Read more
				</Link>
			</Card>
			<Card css={cardStyles}>
				<h2
					css={{
						marginBottom: "1.5rem",
						fontWeight: 400,
						fontSize: "1.4rem",
					}}
				>
					Recent posts
				</h2>
				<ul
					css={{
						padding: 0,
						marginLeft: 0,
						listStyleType: "none",
					}}
				>
					{data.allMdx.edges.map(({ node }) => (
						<li key={node.id}>
							<Link
								css={{
									height: "100%",
									textDecoration: "none",

									[mq.desktop]: {
										display: "flex",
										alignItems: "center",
									},

									"&:hover strong": {
										textDecoration: "underline",
									},
								}}
								to={`/blog/${node.frontmatter?.slug}`}
							>
								<Img
									css={{
										width: "100%",
										[mq.desktop]: {
											display: "inline-block",
											width: 120,
										},
									}}
									fluid={
										node.frontmatter?.featuredImage
											?.childImageSharp?.fluid
									}
								/>
								<div
									css={{
										display: "inline-block",
										padding: "5px 0 10px",
										[mq.desktop]: {
											paddingLeft: 10,
										},
									}}
								>
									<strong
										css={{
											margin: 0,
											padding: "12px 8px 0 0",
											color: "var(--text)",
											fontSize: "1.5rem",
											fontWeight: 400,
										}}
									>
										{node.frontmatter?.title}
									</strong>
									<time
										css={{
											display: "block",
											height: "100%",
											margin: "-4px 0",
											color: "var(--text-light)",
											fontSize: "0.8rem",
											fontWeight: 400,
											fontFamily:
												"var(--sans-serif-font)",
										}}
									>
										{node.frontmatter?.date}
									</time>
									<p
										css={{
											marginTop: 8,
											color: "var(--text)",
											fontStyle: "italic",
										}}
									>
										{node.frontmatter?.abstract}
									</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
				<Link css={viewMore} to="/blog">
					View all posts
				</Link>
			</Card>
		</Layout>
	);
};

export default Home;

export const query = graphql`
	query Home {
		site {
			siteMetadata {
				title
			}
		}
		placeholderImage: file(relativePath: { eq: "profile-img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
		allMdx(
			limit: 3
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
						date(formatString: "MMMM DD, YYYY")
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 400) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
