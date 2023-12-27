module.exports = {
  entry: {
    index: ["./src/index.ts"],
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: ["[name]"],
    libraryTarget: "umd",
  },

  resolve: {
    extensions: [".ts"],
  },

  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              target: "es2015",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
