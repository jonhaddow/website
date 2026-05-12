import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface SEOProps {
  title: string;
}

export const SEO = ({ title }: SEOProps) => {
  const { site } = useStaticQuery<Queries.SEOQuery>(graphql`
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
    }
  `);

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          property: `og:url`,
          content: typeof window !== `undefined` ? window.location.href : "",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};
