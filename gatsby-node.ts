import type { GatsbyNode } from "gatsby";

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
