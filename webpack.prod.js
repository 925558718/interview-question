const merge=require('webpack-merge');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');
const common=require('./webpack.common')
const webpack =require('webpack')
const path=require('path')
module.exports=merge(common,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, "manifest.json"),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]',
            context: __dirname
        })
    ],
    externals:{

    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons:{
                    test:/[\\/]node_modules[\\/]/,

                    chunks: "all",
                },
            }
        }
    }
})
