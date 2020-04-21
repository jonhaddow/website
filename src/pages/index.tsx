import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./index.module.css";

import SEO from "../components/seo";
import Layout from "../components/layout";

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
					<div className={styles.headerTop}>
						<div className={styles.headerInfo}>
							<h1 className={styles.headerTitle}>Jon Haddow</h1>
							<p className={styles.headerHeadline}>Software Engineer</p>
						</div>
						<Img
							className={styles.headerImage}
							fluid={data.placeholderImage?.childImageSharp?.fluid}
						/>
					</div>
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
			</header>
			<form className={styles.card}>
				<label className={styles.searchLabel} htmlFor="searchPosts">
					Search posts
				</label>
				<input className={styles.searchInput} id="searchPosts" />
			</form>
			<section className={styles.card}>
				<h2 className={styles.recentPostsHeader}>Recent posts</h2>
				<ul className={styles.recentPostsList}>
					<li className={styles.recentPostsListItem}>
						<Link className={styles.recentPostsListItemLink} to="/blog/1">
							<img
								className={styles.recentPostsListItemImage}
								src="https://via.placeholder.com/64"
								alt=""
							/>
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
							<img
								className={styles.recentPostsListItemImage}
								src="https://via.placeholder.com/64"
								alt=""
							/>
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
			</section>
		</Layout>
	);
};

export default IndexPage;
