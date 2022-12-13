/** @jsx jsx */
import { jsx } from "@emotion/react";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Card,
  Header,
  Layout,
  NavBar,
  SEO,
  SocialLinks,
  Title,
} from "../../components";

import { MDXProvider } from "@mdx-js/react";
import { mq } from "../../utils/mediaQueries";

const Article = (props: PageProps<Queries.ArticleQuery>) => {
  const post = props.data.mdx;

  if (!post) throw new Error("Missing mdx content");

  return (
    <Layout>
      <SEO
        title={post.frontmatter?.title ?? ""}
        description={post.frontmatter?.abstract ?? post.excerpt ?? undefined}
        image={post.frontmatter?.featuredImage?.childImageSharp?.original}
      />
      <Header>
        <NavBar />
        <Title
          title={post.frontmatter?.title ?? ""}
          subText={post.frontmatter?.date && post.frontmatter?.date}
        />
        <SocialLinks />
      </Header>
      <main>
        <Card
          css={{
            width: "100%",
            maxWidth: 900,
            borderRadius: 0,
            margin: "-32px auto 0",
            [mq.desktop]: {
              borderRadius: 8,
              marginBottom: 64,
            },
          }}
        >
          {post.frontmatter?.featuredImage?.childImageSharp
            ?.gatsbyImageData && (
            <GatsbyImage
              css={{
                marginBottom: 32,
                borderRadius: 8,
              }}
              image={
                post.frontmatter?.featuredImage?.childImageSharp
                  ?.gatsbyImageData
              }
              alt=""
            />
          )}
          <p
            css={{
              fontWeight: 200,
              color: "var(--text-lighter)",
              fontStyle: "italic",
            }}
          >
            {post.frontmatter?.abstract}
          </p>
          <MDXProvider>{props.children}</MDXProvider>
          <p
            css={{
              textAlign: "right",
            }}
          >
            <a
              css={{ color: "var(--text-lighter)" }}
              href={post.fields?.editLink ?? undefined}
            >
              Edit this post on GitHub
            </a>
          </p>
        </Card>
      </main>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query Article($id: String) {
    mdx(id: { eq: $id }) {
      excerpt
      fields {
        editLink
      }
      frontmatter {
        title
        abstract
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData
            original {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;
