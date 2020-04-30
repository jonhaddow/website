const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const parent = getNode(node.parent);
		createNodeField({
			node,
			name: "type",
			value: parent.sourceInstanceName,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							slug
						}
						fields {
							type
						}
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.fields.type === "posts") {
			createPage({
				path: `blog/${node.frontmatter.slug}`,
				component: path.resolve(`./src/templates/article.tsx`),
				context: {
					slug: node.frontmatter.slug,
				},
			});
		} else {
			createPage({
				path: node.frontmatter.slug,
				component: path.resolve(`./src/templates/article.tsx`),
				context: {
					slug: node.frontmatter.slug,
				},
			});
		}
	});
};
