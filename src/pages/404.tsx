import React from "react";

import styles from "./404.module.css";

import { Layout, SEO, NavBar, Header, Title, Card } from "../components";
import { Link } from "gatsby";

const NotFoundPage: React.FC = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Header>
			<NavBar />
			<Title title="404: Not Found" />
		</Header>
		<Card className={styles.card}>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<p>
				<Link to="/">Go back home</Link> and try again
			</p>
		</Card>
	</Layout>
);

export default NotFoundPage;
