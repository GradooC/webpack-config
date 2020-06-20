const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const imgSizeLimit = 10000;

module.exports = {
    mode: 'development',

    entry: './src/index.tsx',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            },
            {
                test: [/\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: imgSizeLimit, name: '[name].[ext]' }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()]
};
