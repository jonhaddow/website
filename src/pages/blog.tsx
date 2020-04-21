import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog: React.FC = () => (
	<Layout withHeader>
		<main>
			<SEO title="Blog" />
			<h1>Blog Posts</h1>
			<Link to="/">Go back to the homepage</Link>
		</main>
	</Layout>
);

export default Blog;
