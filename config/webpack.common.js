const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const imgSizeLimit = 10000;
const appDirectory = process.cwd();

module.exports = {
    // Указываем входную точку для сборки.
    entry: './src/index.tsx',
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
                            // Также импортируем идентификаторы классов в виде camelCase (помимо kebab-case)
                            localsConvention: 'camelCase',
                            modules: {
                                auto: true,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
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
        // Устанавливаем расширения, которые будут подставляться автоматически.
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        // Указываем название выходного файла.
        filename: 'bundle.js',
        // Указываем путь, куда будет класться выходной файл.
        path: path.resolve(appDirectory, 'build')
    },
    plugins: [
        // Автоматически создаёт в выходной директории html файл на основании шаблона index.ejs.
        new HtmlWebpackPlugin()
    ]
};
