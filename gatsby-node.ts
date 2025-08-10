import type { GatsbyNode } from "gatsby";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx` && node.parent) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: "type",
      value: parent?.sourceInstanceName,
    });
    createNodeField({
      name: "editLink",
      node,
      value: `https://github.com/jonhaddow/website/edit/master${
        node.internal.contentFilePath?.replace(__dirname, "") ?? ""
      }`,
    });
  }
};

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPreset({
    name: "@babel/preset-react",
    options: {
      runtime: "automatic",
    },
  });
};
