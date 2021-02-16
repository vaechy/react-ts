// const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx','jsx']
    },
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                 test: /\.jsx?$/, // jsx/js文件的正则
                 exclude: /node_modules/, // 排除 node_modules 文件夹
                 use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [
                                require.resolve('@babel/preset-env'),
                                { modules: false }
                            ]
                        ],
                        cacheDirectory: true
                    }
                 }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/tpl/index.html'
        })
    ],
}
