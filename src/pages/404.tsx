/** @jsx jsx */
import { jsx } from "@emotion/react";

import { Card, Header, Layout, NavBar, SEO, Title } from "../components";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>
      <NavBar />
      <Title title="404: Not Found" />
    </Header>
    <Card
      css={{
        width: "100%",
        maxWidth: "900px",
        margin: "-16px auto",
      }}
    >
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <Link to="/">Go back home</Link> and try again
      </p>
    </Card>
  </Layout>
);

export default NotFoundPage;
