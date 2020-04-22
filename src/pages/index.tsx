import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./index.module.css";

import { Card, Layout, SEO } from "../components";

const IndexPage: React.FC = () => {
	const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
		query {
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
		}
	`);
	return (
		<Layout>
			<SEO title="Home" />
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<div className={styles.headerInfo}>
						<h1 className={styles.headerTitle}>Jon Haddow</h1>
						<p className={styles.headerHeadline}>Software Engineer</p>
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
			<Card className={styles.card}>
				<form>
					<label className={styles.searchLabel} htmlFor="searchPosts">
						Search posts
					</label>
					<input className={styles.searchInput} id="searchPosts" />
				</form>
			</Card>
			<Card className={styles.card}>
				<h2 className={styles.recentPostsHeader}>Recent posts</h2>
				<ul className={styles.recentPostsList}>
					<li className={styles.recentPostsListItem}>
						<Link className={styles.recentPostsListItemLink} to="/blog/1">
							<div className={styles.recentPostsListItemDetails}>
								<strong className={styles.recentPostsListItemTitle}>
									Libero facere eligendi Libero facere eligendi Libero facere
									eligendi
								</strong>
								<p className={styles.recentPostsListItemDescription}>
									Vide, quantum, inquam, fallare, Torquate. Vide, quantum,
									inquam, fallare, Torquate.Vide, quantum, inquam, fallare,
									Torquate.
								</p>
							</div>
						</Link>
					</li>
					<li className={styles.recentPostsListItem}>
						<Link className={styles.recentPostsListItemLink} to="/blog/2">
							<div className={styles.recentPostsListItemDetails}>
								<strong className={styles.recentPostsListItemTitle}>
									Libero facere eligendi
								</strong>
								<p className={styles.recentPostsListItemDescription}>
									Vide, quantum, inquam, fallare, Torquate. Erit...
								</p>
							</div>
						</Link>
					</li>
				</ul>
				<Link className={styles.recentPostsViewMore} to="/blog">
					View all posts
				</Link>
			</Card>
		</Layout>
	);
};

export default IndexPage;
