/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[];
  title: string;
  image?: {
    src?: string | null;
    width?: number | null;
    height?: number | null;
  } | null;
}

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  title,
  image,
}) => {
  const { site, placeholderImage } = useStaticQuery<Queries.SEOQuery>(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            author
            description
            twitterHandle
            siteUrl
          }
        }
        placeholderImage: file(relativePath: { eq: "profile-img.jpg" }) {
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
  const metaImage = `${site?.siteMetadata?.siteUrl}${
    image?.src ?? placeholderImage?.childImageSharp?.original?.src
  }`;

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
          content: metaDescription ?? undefined,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: typeof window !== `undefined` ? window.location.href : "",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription ?? undefined,
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
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.twitterHandle ?? undefined,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription ?? undefined,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
      ])}
    />
  );
};
