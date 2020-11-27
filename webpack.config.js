// webpack-config.js

// Require path.
const path = require("path");

const config = {
  entry: {
    frontend: "./src/frontend/front-index.js",
    admin: "./src/admin/admin-index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
  },
};

// Export the config object.
module.exports = config;
