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
        <Card className="content mx-auto -mt-8 mb-0 w-full max-w-4xl rounded-none p-4 md:rounded-lg md:p-8 lg:mb-16">
          {post.frontmatter?.featuredImage?.childImageSharp
            ?.gatsbyImageData && (
            <GatsbyImage
              className="mb-8 rounded-md"
              image={
                post.frontmatter?.featuredImage?.childImageSharp
                  ?.gatsbyImageData
              }
              alt=""
            />
          )}
          <p className="font-extralight italic text-text-lighter">
            {post.frontmatter?.abstract}
          </p>
          <MDXProvider>{props.children}</MDXProvider>
          <p className="text-right">
            <a
              className="text-text-lighter underline hover:no-underline"
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
