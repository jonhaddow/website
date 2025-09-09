import {
  Card,
  Header,
  Layout,
  NavBar,
  SEO,
  SocialLinks,
  Title,
} from "../components";

const About = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Header>
        <NavBar />
        <Title title="About Me" />
        <SocialLinks />
      </Header>
      <main>
        <Card className="content mx-auto -mt-8 mb-0 w-full max-w-4xl rounded-none p-4 md:rounded-lg md:p-8 lg:mb-16">
          <h1>Hi! I&apos;m Jon 👋</h1>
          <p>I am a full stack web developer based in Swansea, Wales.</p>
          <p>
            I work primarily with React, TypeScript, C#, and .NET Core. I also
            have experience in CSS (and Sass), AWS, and building static sites
            using GatsbyJS (like this{" "}
            <a href="https://github.com/jonhaddow/website/">website</a>
            !).
          </p>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jonathan-haddow">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/jonhaddow/">GitHub</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1DjRzlbXvP9xKGRO80LNO52GKkBYQlQE3/view?usp=share_link">
                CV
              </a>
            </li>
          </ul>
          <p>
            <em>
              This website was built using TypeScript, React and Gatsbyjs. Check
              out the code{" "}
              <a href="https://github.com/jonhaddow/website/">on GitHub</a>.
            </em>
          </p>
        </Card>
      </main>
    </Layout>
  );
};

export default About;
