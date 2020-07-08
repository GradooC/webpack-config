const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    // Устанавливаем mode в production режим для минификации при помощи TerserPlugin.
    mode: 'production',
    // Добавляем дешёвую source-map для дебагинга и для benchmark тестов.
    devtool: 'source-map',
    plugins: [
        // Очищает выходную директорию при каждой сборке.
        new CleanWebpackPlugin(),
    ],
});
