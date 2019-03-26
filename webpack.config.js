const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
    },
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
}