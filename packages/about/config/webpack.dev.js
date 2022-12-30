const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:8078/",
    clean: true,
  },
  devServer: {
    port: 8078,
    historyApiFallback: { index: "/index.html" },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "about",
      filename: "remoteEntry.js",
      exposes: {
        "./AboutApp": "./src/bootstrap",
      },
      shared: {
        react: dependencies.react,
        "react-dom": dependencies["react-dom"],
        "react-router-dom": dependencies["react-router-dom"],
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
