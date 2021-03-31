const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {esModule: true,}
                },'css-loader']
            }
        ]
    }
}