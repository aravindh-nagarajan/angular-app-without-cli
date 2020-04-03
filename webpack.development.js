/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const cssLoaders = [
    'style-loader',
    'css-loader',
];

module.exports = (env = {}) => {
    const buildFolder = './build';

    console.log(buildFolder)
    return merge(common(env), {
        watchOptions: {
            ignored: /node_modules/,
        },
        mode: 'development',
        devtool: 'eval-source-map',
        output: {
            path: path.resolve(__dirname, buildFolder),
        },
        plugins: [
            new CleanWebpackPlugin([buildFolder]),
        ],
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        ...cssLoaders,
                        'less-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        ...cssLoaders,
                    ],
                },
            ],
        },
    });
};
