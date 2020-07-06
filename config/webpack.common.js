const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const imgSizeLimit = 10000;
const appDirectory = process.cwd();

module.exports = {
  // Указываем входную точку для сборки.
  entry: path.resolve(appDirectory, "src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(appDirectory, "src")],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // Также импортируем идентификаторы классов в виде camelCase (помимо kebab-case)
              localsConvention: "camelCase",
              modules: {
                auto: true,
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: [/\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: { limit: imgSizeLimit, name: "[name].[ext]" },
          },
        ],
      },
    ],
  },
  resolve: {
    // Устанавливаем расширения, которые будут подставляться автоматически.
    extensions: [".tsx", ".ts", ".js"],
    // Устанавливает псевдоним для корректной работы хуков с hmr
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  output: {
    // Указываем название выходного файла.
    filename: "bundle.js",
    // Указываем путь, куда будет класться выходной файл.
    path: path.resolve(appDirectory, "build"),
  },
  plugins: [
    // Автоматически создаёт в выходной директории html файл на основании шаблона index.ejs.
    new HtmlWebpackPlugin(),
    // Проверяет типы вместо ts-loader-а.
    new ForkTsCheckerWebpackPlugin(),
  ],
};
