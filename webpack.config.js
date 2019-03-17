const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: "./src/index.tsx",

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
                options: {
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }
        ]
    },

    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin("style.css"),
    ],

    devtool: "source-map",

    resolve: {
        modules: ['node_modules'],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
};