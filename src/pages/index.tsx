import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, Layout, RecentPosts, SEO, SocialLinks } from "../components";

const Home = ({ data }: PageProps<Queries.HomeQuery>) => {
  return (
    <Layout>
      <SEO title="Home" />
      <header className="flex items-center justify-center bg-primary px-0 pb-16 pt-12 text-header-text">
        <div className="flex w-full max-w-md flex-col-reverse items-center justify-between px-4 py-8 md:flex-row">
          <div className="flex flex-col md:mr-8">
            <h1 className="mt-6 text-center text-3xl tracking-wider md:m-0 md:text-left">
              Jon Haddow
            </h1>
            <p className="m-0 mt-3 text-center text-xl font-light md:text-left">
              Web Developer
            </p>
            <nav className="mb-4">
              <ul className="m-0 mt-8 flex items-center justify-center px-2 py-0 md:justify-start md:p-0">
                {[
                  { text: "About", link: "/about" },
                  { text: "Blog", link: "/blog" },
                ].map((x) => (
                  <li key={x.link} className="mr-4 inline last:mr-0">
                    <Link
                      className="rounded-md border border-solid border-header-text px-3 py-2 text-xl text-header-text no-underline opacity-90 transition-opacity hover:opacity-100 focus:opacity-100"
                      to={x.link}
                    >
                      {x.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks className="md:mx-0" />
          </div>
          {data.placeholderImage?.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              className="h-36 w-36 rounded-full"
              image={data.placeholderImage?.childImageSharp?.gatsbyImageData}
              alt=""
            />
          )}
        </div>
      </header>
      <main>
        <Card className="mx-auto -mt-16 mb-16 max-w-3xl rounded-none md:w-9/12 md:rounded-lg">
          <p className="mb-4">
            I am a software engineer that builds quality, scalable web
            applications. I work primarily with React, TypeScript and .NET.
          </p>
          <Link
            className="no-underline hover:underline focus:underline"
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
