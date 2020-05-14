import React from "react";
import styles from "./NavBar.module.css";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface NavItem {
	link: string;
	text: string;
}

export const NavBar: React.FC = () => {
	const navItems: NavItem[] = [
		{
			link: "/about",
			text: "About",
		},
		{
			link: "/blog",
			text: "Blog",
		},
	];

	const data = useStaticQuery<GatsbyTypes.NavBarQuery>(graphql`
		query NavBar {
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
		<nav className={styles.nav}>
			<Link to="/" className={styles.titleLink}>
				<Img
					className={styles.titleImage}
					fluid={data.placeholderImage?.childImageSharp?.fluid}
					alt=""
				/>
				<h1 className={styles.title}>{data.site?.siteMetadata?.title}</h1>
			</Link>
			<ul className={styles.navList}>
				{navItems.map((navItem) => (
					<li key={navItem.link} className={styles.listItem}>
						<Link
							className={styles.navLink}
							to={navItem.link}
							activeClassName={styles.active}
							partiallyActive={true}
						>
							{navItem.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
