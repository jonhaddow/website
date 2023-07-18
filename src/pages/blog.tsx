import * as React from "react";

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
        <ul className="lg: m-8 grid max-w-screen-lg list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3">
          {filteredPosts.map(({ node }) => (
            <li key={node.id} className="">
              <Link
                className="block h-full text-text no-underline outline-none"
                to={`/blog/${node.frontmatter?.slug ?? ""}`}
              >
                <Card className="flex h-full flex-col p-0">
                  <h3 className="m-0 mb-3 px-12 pb-0 pt-8 text-2xl font-normal text-text">
                    {node.frontmatter?.title}
                  </h3>
                  <span className="px-12 py-0 font-light text-text">
                    <time>{node.frontmatter?.date}</time>
                  </span>
                  <p className="m-0 px-12 py-3 pb-6 text-lg font-normal leading-6 text-text-lighter">
                    {node.frontmatter?.abstract}
                  </p>
                  {node.frontmatter?.featuredImage?.childImageSharp
                    ?.gatsbyImageData && (
                    <GatsbyImage
                      className="block h-[120px] w-full grow rounded-b-lg object-cover"
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
