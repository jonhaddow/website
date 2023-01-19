/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { mq } from "../utils/mediaQueries";

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
    <nav
      css={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        padding: "24px",
        [mq.desktop]: {
          flexDirection: "row",
          paddingRight: "128px",
        },
      }}
    >
      <Link
        to="/"
        css={{
          display: "flex",
          alignItems: "center",
          alignSelf: "start",
          flexShrink: 0,
          color: "var(--header-text)",
          textDecoration: "none",
          [mq.desktop]: {
            alignSelf: "center",
          },
        }}
      >
        {data.placeholderImage?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            alt=""
            css={{
              width: "64px",
              borderRadius: "50%",
            }}
          />
        )}
        <h1
          css={{
            display: "initial",
            margin: 0,
            paddingLeft: "15px",
            fontWeight: 300,
            fontSize: "1.6rem",
          }}
        >
          {data.site?.siteMetadata?.title}
        </h1>
      </Link>
      <ul
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "32px 0 0",
          padding: 0,
          listStyle: "none",
          [mq.desktop]: {
            justifyContent: "flex-end",
            margin: 0,
          },
        }}
      >
        {navItems.map((navItem) => (
          <li
            key={navItem.link}
            css={{
              display: "inline",
              paddingLeft: "30px",
              margin: 0,
              "&:first-of-type": {
                paddingLeft: 0,
              },
            }}
          >
            <Link
              to={navItem.link}
              activeStyle={{
                fontWeight: 700,
                borderBottom: "solid var(--header-text) 3px",
              }}
              partiallyActive={true}
              css={{
                color: "var(--header-text)",
                textDecoration: "none",
                textTransform: "uppercase",
                fontSize: "1.1rem",
                paddingBottom: "8px",
                "&:hover": {
                  borderBottom: "solid var(--header-text) 3px",
                },
              }}
            >
              {navItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
