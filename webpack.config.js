const path=require('path')

module.exports={
    mode:'production',
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ],
    },
    plugins: []
}
