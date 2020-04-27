const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const parent = getNode(node.parent);
		createNodeField({
			node,
			name: "type",
			value: parent.sourceInstanceName,
		});

		const slug = createFilePath({
			node,
			getNode,
			basePath: `content/${parent.sourceInstanceName}`,
		});
		createNodeField({
			node,
			name: "slug",
			value: slug,
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
						fields {
							slug
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
				path: `blog${node.fields.slug}`,
				component: path.resolve(`./src/templates/article.tsx`),
				context: {
					slug: node.fields.slug,
				},
			});
		} else {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/article.tsx`),
				context: {
					slug: node.fields.slug,
				},
			});
		}
	});
};
