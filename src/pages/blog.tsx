import React from "react";

import { Card, Layout, NavBar, Header, SEO, SearchCard } from "../components";

import styles from "./blog.module.css";

const Blog: React.FC = () => (
	<Layout>
		<SEO title="Blog" />
		<Header>
			<NavBar showProfileImage />
			<h2 className={styles.headerTitle}>Blog</h2>
		</Header>
		<main>
			<SearchCard />
			<Card></Card>
		</main>
	</Layout>
);

export default Blog;
