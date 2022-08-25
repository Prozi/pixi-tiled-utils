module.exports = {
  target: "web",
  entry: "./lib/index.js",
  output: {
    path: require("path").resolve(__dirname, "es2015"),
    filename: "index.js",
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"]
        },
      },
    ],
  },
};
