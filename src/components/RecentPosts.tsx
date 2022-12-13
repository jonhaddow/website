/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Card } from ".";
import { mq } from "../utils/mediaQueries";
import { GatsbyImage } from "gatsby-plugin-image";
export const RecentPosts: React.FC = () => {
  const data = useStaticQuery<Queries.RecentPostsQuery>(graphql`
    query RecentPosts {
      allMdx(
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fields: { type: { eq: "posts" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              abstract
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Card
      css={{
        width: "90%",
        maxWidth: "700px",
        margin: "0 auto 64px",
      }}
    >
      <h2
        css={{
          marginBottom: "1.5rem",
          fontWeight: 400,
          fontSize: "1.4rem",
        }}
      >
        Recent posts
      </h2>
      <ul
        css={{
          padding: 0,
          marginLeft: 0,
          listStyleType: "none",
        }}
      >
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link
              css={{
                width: "100%",
                textDecoration: "none",

                [mq.desktop]: {
                  display: "flex",
                  alignItems: "center",
                },

                "&:hover strong": {
                  textDecoration: "underline",
                },
              }}
              to={`/blog/${node.frontmatter?.slug ?? ""}`}
            >
              {node.frontmatter?.featuredImage?.childImageSharp
                ?.gatsbyImageData && (
                <GatsbyImage
                  css={{
                    width: "100%",
                    [mq.desktop]: {
                      display: "inline-block",
                      width: 120,
                      minWidth: 120,
                    },
                  }}
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt=""
                />
              )}
              <div
                css={{
                  display: "inline-block",
                  padding: "5px 0 10px",
                  overflow: "hidden",
                  width: "100%",
                  [mq.desktop]: {
                    paddingLeft: 10,
                  },
                }}
              >
                <strong
                  css={{
                    margin: 0,
                    padding: "12px 8px 0 0",
                    color: "var(--text)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                  }}
                >
                  {node.frontmatter?.title}
                </strong>
                <time
                  css={{
                    display: "block",
                    height: "100%",
                    margin: "-4px 0",
                    color: "var(--text-light)",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    fontFamily: "var(--sans-serif-font)",
                  }}
                >
                  {node.frontmatter?.date}
                </time>
                <p
                  css={{
                    marginTop: 8,
                    color: "var(--text)",
                    fontStyle: "italic",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {node.frontmatter?.abstract}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        css={{
          textDecoration: "none",
          "&:hover, &:focus, &:active": {
            textDecoration: "underline",
          },
        }}
        to="/blog"
      >
        View all posts
      </Link>
    </Card>
  );
};
