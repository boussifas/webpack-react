const path = require("path");

module.exports= {
    entry: './public/index.html',
    output: {
       path: path.join(__dirname, "/dist"),
       filename: "index.bundle.js"
    },
    devServer: {
        port: 3010,
        watchContentBase: true
    },
    module: {
      rules:[
          {
              test:  /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.scss$/,
              use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          }
      ]
    }
}