/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { mq } from "../utils/mediaQueries";

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
		<nav
			css={{
				width: "100%",
				maxWidth: "1200px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				margin: "0 auto",
				padding: "24px",
				[mq.desktop]: {
					flexDirection: "row",
					paddingRight: "128px",
				},
			}}
		>
			<Link
				to="/"
				css={{
					display: "flex",
					alignItems: "center",
					alignSelf: "start",
					flexShrink: 0,
					color: "var(--header-text)",
					textDecoration: "none",
					[mq.desktop]: {
						alignSelf: "center",
					},
				}}
			>
				<Img
					fluid={data.placeholderImage?.childImageSharp?.fluid}
					alt=""
					css={{
						width: "64px",
						borderRadius: "50%",
					}}
				/>
				<h1
					css={{
						display: "initial",
						margin: 0,
						paddingLeft: "15px",
						fontWeight: 300,
						fontSize: "1.6rem",
					}}
				>
					{data.site?.siteMetadata?.title}
				</h1>
			</Link>
			<ul
				css={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "32px 0 0",
					padding: 0,
					listStyle: "none",
					[mq.desktop]: {
						justifyContent: "flex-end",
						margin: 0,
					},
				}}
			>
				{navItems.map((navItem) => (
					<li
						key={navItem.link}
						css={{
							display: "inline",
							paddingLeft: "30px",
							margin: 0,
							"&:first-child": {
								paddingLeft: 0,
							},
						}}
					>
						<Link
							to={navItem.link}
							activeStyle={{
								fontWeight: 700,
								borderBottom: "solid var(--header-text) 3px",
							}}
							partiallyActive={true}
							css={{
								color: "var(--header-text)",
								textDecoration: "none",
								textTransform: "uppercase",
								fontSize: "1.1rem",
								paddingBottom: "8px",
								"&:hover": {
									borderBottom:
										"solid var(--header-text) 3px",
								},
							}}
						>
							{navItem.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
