// webpack-config.js

// Require path.
const path = require("path");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const config = {
  entry: {
    frontend: "./src/frontend/front-index.js",
    admin: "./src/admin/admin-index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
  },

  module: {
    rules: [
      {
        // Look for any .js files.
        test: /\.js$/,
        // Exclude the node_modules folder.
        exclude: /node_modules/,
        // Use babel loader to transpile the JS files.
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      files: "**/*.php",
      proxy: "http://two.wordpress.test",
    }),
  ],
};

// Export the config object.
module.exports = config;
