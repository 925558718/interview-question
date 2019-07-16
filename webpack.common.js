const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack=require('webpack');
const ASSET_PATH=process.env.ASSET_PATH||'/';
console.log(path.resolve(__dirname,'./webpack/src/loader.js'))
module.exports={
    entry: {
        app:'./webpack/src/index.js',
    },
    //多出口
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    resolveLoader: {
      modules:[
          path.resolve(__dirname,'./webpack/loader'),
      ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {

    }

}
