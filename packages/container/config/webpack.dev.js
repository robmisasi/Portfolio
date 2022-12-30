const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:8079/",
    clean: true,
  },
  devServer: {
    port: 8079,
    historyApiFallback: { index: "/index.html" },
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
        about: "about@http://localhost:8078/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
