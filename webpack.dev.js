const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,  
                //this is dinamicaly loading the CSS and injecting it in the final app build inside the header
                use: [
                    'style-loader', // 3. Inject CSS into the DOM
                    'css-loader', // 2. turns CSS into JS
                    'sass-loader', // 1. turns SASS into CSS
                ], 
                //they are executed from the end to the beginning of the array
            },
        ],
    },
});