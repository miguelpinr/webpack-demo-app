const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
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
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    },
                },
            },
        ],
    },
}