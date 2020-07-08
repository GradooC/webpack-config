const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // Устанавливаем mode в development режим.
    mode: 'development',
    // Добавляем подробную source-map для дебагинга.
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // Включаем поддержку hot module replacement
        hot: true,
    },
});
