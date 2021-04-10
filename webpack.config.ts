import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";

const config: webpack.Configuration = {
  entry: "/app/src/app.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "app/dist"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./app/src/**/*",
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "app/static/html", to: "" },
        { from: "app/static/img", to: "img" },
      ],
    }),
  ],
};

export default config;