const merge=require('webpack-merge');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');
const common=require('./webpack.common')
const webpack =require('webpack')
module.exports=merge(common,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        })
    ],
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
