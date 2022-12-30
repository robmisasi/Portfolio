const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/about/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "about",
      filename: "remoteEntry.js",
      exposes: {
        "./About": "./src/bootstrap",
      },
      shared: {
        react: dependencies.react,
        "react-dom": dependencies["react-dom"],
        "react-router-dom": dependencies["react-router-dom"],
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
