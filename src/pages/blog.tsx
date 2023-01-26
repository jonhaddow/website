/** @jsx jsx */
import { jsx } from "@emotion/react";

import {
  Card,
  Header,
  Layout,
  NavBar,
  SEO,
  SearchCard,
  Title,
} from "../components";

import { Link, PageProps, graphql } from "gatsby";
import { matchSorter } from "match-sorter";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = ({ data, location }: PageProps<Queries.BlogQuery>) => {
  let filteredPosts = data.allMdx.edges;
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("s");
  if (query) {
    filteredPosts = matchSorter(filteredPosts, query, {
      keys: [
        "node.frontmatter.title",
        "node.frontmatter.abstract",
        "node.frontmatter.tags",
      ],
    });
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Header>
        <NavBar />
        <Title title="Blog" />
      </Header>
      <main>
        <SearchCard location={location} />
        <ul
          css={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(400px, 100%), 1fr))",
            gridGap: "1rem",
            margin: "32px",
            padding: "0",
            listStyle: "none",
          }}
        >
          {filteredPosts.map(({ node }) => (
            <li key={node.id}>
              <Link
                css={{
                  height: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "var(--text)",
                  outline: "none",
                }}
                to={`/blog/${node.frontmatter?.slug ?? ""}`}
              >
                <Card
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "0",
                  }}
                >
                  <h3
                    css={{
                      margin: "0 0 12px",
                      padding: "32px 48px 0",
                      fontWeight: 400,
                      fontSize: "1.6rem",
                      color: "var(--text)",
                    }}
                  >
                    {node.frontmatter?.title}
                  </h3>
                  <span
                    css={{
                      padding: "0 48px",
                      fontWeight: 300,
                      color: "var(--text)",
                    }}
                  >
                    <time>{node.frontmatter?.date}</time>
                  </span>
                  <p
                    css={{
                      margin: 0,
                      padding: "12px 48px 24px",
                      fontWeight: 400,
                      fontSize: "1.2rem",
                      color: "var(--text-lighter)",
                      lineHeight: "1.6rem",
                    }}
                  >
                    {node.frontmatter?.abstract}
                  </p>
                  {node.frontmatter?.featuredImage?.childImageSharp
                    ?.gatsbyImageData && (
                    <GatsbyImage
                      css={{
                        width: "100%",
                        height: "120px",
                        flexGrow: 1,
                        display: "block",
                        objectFit: "cover",
                        borderRadius: "0 0 5px 5px",
                      }}
                      image={
                        node.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                      alt=""
                    />
                  )}
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query Blog {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            tags
            title
            abstract
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
