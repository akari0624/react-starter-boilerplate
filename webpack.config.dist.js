const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill' ,'./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',        // your webApp name(if has) on server put here.   eg:/MyWebApp
        filename: '[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, {
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
                test: /\.(css|less)$/

            }, {
                use: 'file-loader',
                test: /\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2)$/

            }, {
                use: 'url-loader?limit=1000',
                test: /\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2)$/
            }

        ]
    },
    plugins: [new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: './index.html'
        })],
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ],
        extensions: ['*', '.js', '.jsx']
    },   
     optimization: {
        splitChunks: {
            chunks:'all'
        }
    },
    
};