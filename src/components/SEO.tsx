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
	image?: {
		src?: string;
		width?: number;
		height?: number;
	};
}

export const SEO: React.FC<SEOProps> = ({
	description,
	lang = "en",
	meta = [],
	title,
	image,
}) => {
	const { site, placeholderImage } = useStaticQuery(
		graphql`
			query SEO {
				site {
					siteMetadata {
						title
						author
						description
					}
				}
				placeholderImage: file(
					relativePath: { eq: "profile-img.jpg" }
				) {
					childImageSharp {
						original {
							src
							height
							width
						}
					}
				}
			}
		`
	);

	const metaDescription = description ?? site?.siteMetadata?.description;
	const metaImage = image ?? placeholderImage?.childImageSharp?.original;

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
					name: `image`,
					content: metaImage.src,
				},
				{
					property: `og:url`,
					content:
						typeof window !== `undefined`
							? window.location.href
							: "",
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
					content: metaImage.src,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.twitterHandle,
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "twitter:description",
					content: metaDescription,
				},
				{
					name: "twitter:image",
					content: metaImage.src,
				},
			])}
		/>
	);
};
