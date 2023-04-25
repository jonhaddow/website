/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, Layout, RecentPosts, SEO, SocialLinks } from "../components";
import { mq } from "../utils/mediaQueries";

const Home = ({ data }: PageProps<Queries.HomeQuery>) => {
  return (
    <Layout>
      <SEO title="Home" />
      <header
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "48px 0 64px",
          background: "var(--header-bg)",
          color: "var(--header-text)",
        }}
      >
        <div
          css={{
            width: "100%",
            maxWidth: "450px",
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 16px",

            [mq.desktop]: {
              flexDirection: "row",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",

              [mq.desktop]: {
                marginRight: 32,
              },
            }}
          >
            <h1
              css={{
                margin: "24px 0 0",
                fontSize: "2rem",
                textAlign: "center",
                letterSpacing: "1px",

                [mq.desktop]: {
                  margin: 0,
                  textAlign: "left",
                },
              }}
            >
              Jon Haddow
            </h1>
            <p
              css={{
                margin: "12px 0 0",
                fontWeight: 300,
                fontSize: "1.2rem",
                textAlign: "center",

                [mq.desktop]: {
                  textAlign: "left",
                },
              }}
            >
              Web Developer
            </p>
            <nav css={{ marginBottom: 15 }}>
              <ul
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "32px 0 0",
                  padding: "0 8px",

                  [mq.desktop]: {
                    justifyContent: "start",
                    padding: 0,
                  },
                }}
              >
                {[
                  { text: "About", link: "/about" },
                  { text: "Blog", link: "/blog" },
                ].map((x) => (
                  <li
                    key={x.link}
                    css={{
                      display: "inline",
                      marginRight: 16,
                      "&:last-child": { marginRight: 0 },
                    }}
                  >
                    <Link
                      css={{
                        padding: "8px 12px",
                        color: "var(--header-text)",
                        textDecoration: "none",
                        borderRadius: "4px",
                        border: "solid var(--header-text) 1px",
                        fontSize: "1.2rem",
                        opacity: "0.9",
                        transition:
                          "opacity var(--animation-speed), background var(--animation-speed)",

                        "&:focus, &:active, &:hover": {
                          background: "rgba(100, 100, 100, 0.2)",
                          outline: "none",
                          opacity: 1,
                        },
                      }}
                      to={x.link}
                    >
                      {x.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks />
          </div>
          {data.placeholderImage?.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              css={{
                height: "140px",
                width: "140px",
                borderRadius: "50%",
              }}
              image={data.placeholderImage?.childImageSharp?.gatsbyImageData}
              alt=""
            />
          )}
        </div>
      </header>
      <main>
        <Card className="w-9/12 max-w-3xl -mt-16 mb-16 mx-auto">
          <p>
            I am a software engineer that builds quality, scalable web
            applications. I work primarily with React, TypeScript and .NET.
          </p>
          <Link
            css={{
              textDecoration: "none",
              "&:hover, &:focus, &:active": {
                textDecoration: "underline",
              },
            }}
            to="/about"
          >
            Read more about me
          </Link>
        </Card>
        <RecentPosts />
      </main>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query Home {
    placeholderImage: file(relativePath: { eq: "profile-img.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
