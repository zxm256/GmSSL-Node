const path = require('path')
module.exports = {
    // 入口文件
    entry: './index.js',
    // 输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gmssl.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
                }
            }
        ]
    }
    
}