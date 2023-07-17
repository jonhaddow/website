import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

interface NavItem {
  link: string;
  text: string;
}

export const NavBar = () => {
  const navItems: NavItem[] = [
    {
      link: "/about",
      text: "About",
    },
    {
      link: "/blog",
      text: "Blog",
    },
  ];

  const data = useStaticQuery<Queries.NavBarQuery>(graphql`
    query NavBar {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile-img.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <nav className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-6 sm:flex-row">
      <Link
        to="/"
        className="flex shrink-0 items-center self-center text-header-text sm:self-start"
      >
        {data.placeholderImage?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            alt=""
            className="w-16 rounded-full"
          />
        )}
        <h1 className="pl-4 text-2xl font-light">
          {data.site?.siteMetadata?.title}
        </h1>
      </Link>
      <ul className="mt-8 flex w-full items-center justify-center sm:m-0 sm:justify-end">
        {navItems.map((navItem) => (
          <li key={navItem.link} className="inline pl-8 first-of-type:pl-0">
            <Link
              to={navItem.link}
              activeClassName="font-bold border-b-2"
              partiallyActive={true}
              className="pb-2 text-lg uppercase text-header-text hover:border-b-2"
            >
              {navItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
