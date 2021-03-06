import { Configuration } from "webpack";
import path from "path";
import htmlWebpackPlugin from "html-webpack-plugin";
import tsconfigPathPlugin from "tsconfig-paths-webpack-plugin";
import compressionPlugin from "compression-webpack-plugin";

export default function config(...args: any[]): Configuration {
  const isProd: boolean = Boolean(args[0].mode && args[0].mode === "production");

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    mode: isProd ? "production" : "development",
    target: "web",
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.(css|less)$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      plugins: [new tsconfigPathPlugin({ configFile: path.join(__dirname, "tsconfig.json") })],
    },
    plugins: [
      new htmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        inject: "head",
        scriptLoading: "defer",
        meta: {
          keywords: "time, employee, track, manage, management",
          description: "An easy to use employee time tracker",
        },
      }),
      new compressionPlugin({
        algorithm: "gzip",
      }),
    ],
    devServer: {
      historyApiFallback: true,
      port: 8675,
      open: true,
      hot: true,
      publicPath: "/",
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
      },
    },
    output: {
      filename: isProd ? "[name].js" : "[chunkhash].js",
    },
  };
}
