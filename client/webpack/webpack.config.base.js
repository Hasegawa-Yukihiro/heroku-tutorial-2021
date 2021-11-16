const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//  aliasの読み込み
const { alias } = require("../config/scripts/alias.js");

module.exports = {
  /** entry point */
  entry: path.resolve(__dirname, "../src/index.tsx"),
  /** output point */
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  /** https://qiita.com/YoshinoriKanno/items/322ae6e53daa35059c15 */
  devtool: "eval-source-map",
  /** jsファイルへの変換処理  */
  module: {
    rules: [
      /** ts , tsx ファイルは ts-loader を使ってJSに変換 */
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, "../tsconfig.json")
            } //  ビルドの高速化
          }
        ]
      }
    ]
  },

  /**
   * webpack には import する際に、指定されたモジュールを検索して該当するファイルを探す仕組み（モジュール解決  ）がある
   * resolve オプションはモジュール解決（モジュールの import を解決する仕組み）の設定を変更します。
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: alias.toWebpack()
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
      filename: "index.html"
    })
  ]
};
