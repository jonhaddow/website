/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
  Card,
  Header,
  Layout,
  NavBar,
  SEO,
  SocialLinks,
  Title,
} from "../components";

import { mq } from "../utils/mediaQueries";

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
        <Card
          css={{
            width: "100%",
            maxWidth: 900,
            borderRadius: 0,
            margin: "-32px auto 0",
            [mq.desktop]: {
              borderRadius: 8,
              marginBottom: 64,
            },
          }}
        >
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
              <a href="https://drive.google.com/file/d/10dIz8YtLZ9lMi3vvb8OCDHpTeAIuejR2/view?usp=sharing">
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
