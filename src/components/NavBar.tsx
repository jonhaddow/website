import React from "react";
import styles from "./NavBar.module.css";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface NavItem {
	link: string;
	text: string;
	active: boolean;
}

export const NavBar: React.FC = () => {
	const navItems: NavItem[] = [
		{
			link: "/about",
			text: "About",
			active: false,
		},
		{
			link: "/blog",
			text: "Blog",
			active: false,
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
			<Link to="/" className={styles.nav__titleLink}>
				<Img
					className={styles.nav__image}
					fluid={data.placeholderImage?.childImageSharp?.fluid}
					alt=""
				/>
				<h1 className={styles.nav__title}>{data.site?.siteMetadata?.title}</h1>
			</Link>
			<ul className={styles.nav__list}>
				{navItems.map((navItem) => (
					<li key={navItem.link} className={styles.nav__listItem}>
						<Link
							className={`${styles.nav__link} ${
								navItem.active ? styles.nav__link__active : ""
							}`}
							to={navItem.link}
						>
							{navItem.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
