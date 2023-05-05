import { Link, graphql, useStaticQuery } from "gatsby";
import { Card } from ".";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export const RecentPosts: React.FC = () => {
  const data = useStaticQuery<Queries.RecentPostsQuery>(graphql`
    query RecentPosts {
      allMdx(
        limit: 3
        sort: { frontmatter: { date: DESC } }
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
    <Card className="mx-auto mb-16 w-9/12 max-w-3xl">
      <h2 className="mb-6 text-2xl font-normal">Recent posts</h2>
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link
              className="group items-center md:flex"
              to={`/blog/${node.frontmatter?.slug ?? ""}`}
            >
              {node.frontmatter?.featuredImage?.childImageSharp
                ?.gatsbyImageData && (
                <GatsbyImage
                  className="w-full md:inline-block md:w-[120px]"
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt=""
                />
              )}
              <div className="md: inline-block w-full overflow-hidden pb-3 pt-1 md:pl-3">
                <strong className="pr-2 pt-3 text-2xl font-normal text-text group-hover:underline">
                  {node.frontmatter?.title}
                </strong>
                <time className="-mt-1 block h-full text-sm text-text-light">
                  {node.frontmatter?.date}
                </time>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap italic">
                  {node.frontmatter?.abstract}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="hover:underline" to="/blog">
        View all posts
      </Link>
    </Card>
  );
};
