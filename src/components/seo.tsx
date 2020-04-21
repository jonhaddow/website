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
}

const SEO: React.FC<SEOProps> = ({
	description,
	lang = "en",
	meta = [],
	title,
}) => {
	const { site } = useStaticQuery<GatsbyTypes.Query>(
		graphql`
			query {
				site {
					siteMetadata {
						title
						author
					}
				}
			}
		`
	);

	const metaDescription = description;

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

export default SEO;
