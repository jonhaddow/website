import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./index.module.css";

import { Card, Layout, SEO } from "../components";

interface IndexProps {
	data: GatsbyTypes.HomeQuery;
}

const Home: React.FC<IndexProps> = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.headerInfo}>
					<h1 className={styles.headerTitle}>Jon Haddow</h1>
					<p className={styles.headerHeadline}>Web Developer</p>
					<nav>
						<ul className={styles.headerNavList}>
							<li className={styles.headerNavListItem}>
								<Link className={styles.headerNavLink} to="/about">
									About
								</Link>
							</li>
							<li className={styles.headerNavListItem}>
								<Link className={styles.headerNavLink} to="/blog">
									Blog
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Img
					className={styles.headerImage}
					fluid={data.placeholderImage?.childImageSharp?.fluid}
				/>
			</div>
		</header>
		<Card className={`${styles.card} ${styles.aboutCard}`}>
			<p>
				I am a full stack web developer that builds quality, scalable web
				applications. I work primarily with React, TypeScript and .NET.
			</p>
			<Link className={styles.viewMore} to="/about">
				Read more
			</Link>
		</Card>
		<Card className={styles.card}>
			<h2 className={styles.recentPostsHeader}>Recent posts</h2>
			<ul className={styles.recentPostsList}>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<li key={node.id}>
						<Link
							className={styles.recentPostsListItemLink}
							to={`/blog/${node.fields?.slug}`}
						>
							<strong className={styles.recentPostsListItemTitle}>
								{node.frontmatter?.title}
							</strong>
							<time className={styles.recentPostsListItemDate}>
								{node.frontmatter?.date}
							</time>
							<p className={styles.recentPostsListItemDescription}>
								{node.frontmatter?.abstract}
							</p>
						</Link>
					</li>
				))}
			</ul>
			<Link className={styles.viewMore} to="/blog">
				View all posts
			</Link>
		</Card>
	</Layout>
);

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
		allMarkdownRemark(
			limit: 3
			sort: { order: DESC, fields: frontmatter___date }
			filter: { fields: { type: { eq: "posts" } } }
		) {
			edges {
				node {
					id
					frontmatter {
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
					fields {
						slug
					}
				}
			}
		}
	}
`;
