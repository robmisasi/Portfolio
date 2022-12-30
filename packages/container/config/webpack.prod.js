const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      shared: {
        react: dependencies.react,
        "react-dom": dependencies["react-dom"],
        "react-router-dom": dependencies["react-router-dom"],
      },
      remotes: {
        about: `about@${domain}/about/latest/remoteEntry.js`,
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
