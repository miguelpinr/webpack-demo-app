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
                test: /\.css$/,  //this is dinamicaly loading the CSS and injecting it in the final app build inside the header
                use: ['style-loader', 'css-loader'], //they are executed from the end to the beginning of the array
            },
        ],
    },
}