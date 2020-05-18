/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
	description?: string;
	lang?: string;
	meta?: React.DetailedHTMLProps<
		React.MetaHTMLAttributes<HTMLMetaElement>,
		HTMLMetaElement
	>[];
	title: string;
	image?: string;
}

export const SEO: React.FC<SEOProps> = ({
	description,
	lang = "en",
	meta = [],
	title,
	image,
}) => {
	const { site, placeholderImage } = useStaticQuery<GatsbyTypes.SEOQuery>(
		graphql`
			query SEO {
				site {
					siteMetadata {
						title
						author
						description
					}
				}
				placeholderImage: file(relativePath: { eq: "profile-img.jpg" }) {
					childImageSharp {
						original {
							src
						}
					}
				}
			}
		`
	);

	const metaDescription = description ?? site?.siteMetadata?.description;
	const metaImage = image ?? placeholderImage?.childImageSharp?.original?.src;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site?.siteMetadata?.title}`}
			meta={meta.concat([
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: "og:image",
					content: metaImage,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			])}
		/>
	);
};
