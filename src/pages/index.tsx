import { PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, Layout, SEO } from "../components";

const Home = ({ data }: PageProps<Queries.HomeQuery>) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12">
        {data.placeholderImage?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            className="size-36 rounded-full"
            image={data.placeholderImage?.childImageSharp?.gatsbyImageData}
            alt="Jon Haddow"
          />
        )}
        <div className="text-center text-header-text">
          <h1 className="text-3xl tracking-wider">Jon Haddow</h1>
        </div>
        <Card className="content max-w-md text-balance rounded-lg p-8 text-center">
          <p>
            Hey 👋 I&apos;m a developer based in Swansea, Wales. Find me on{" "}
            <a href="https://github.com/jonhaddow">GitHub</a> and{" "}
            <a href="https://www.linkedin.com/in/jonathan-haddow">LinkedIn</a>.
          </p>
        </Card>
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
