import React from "react";
import styles from "./NavBar.module.css";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface NavItem {
	link: string;
	text: string;
	active: boolean;
}

interface NavBarProps {
	showProfileImage?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ showProfileImage }) => {
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
		{
			link: "/contact",
			text: "Contact",
			active: true,
		},
	];

	const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
		query SiteTitleQuery {
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
			{showProfileImage && (
				<Img fluid={data.placeholderImage?.childImageSharp?.fluid} alt="" />
			)}
			<h1 className={styles.nav__title}>
				<Link to="/" className={styles.nav__titleLink}>
					{data.site?.siteMetadata?.title}
				</Link>
			</h1>
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
