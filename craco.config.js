/* eslint-disable */
module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: ["@emotion"],
  },
  eslint: {
    mode: "file",
  },
};
