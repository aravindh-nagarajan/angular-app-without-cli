/* eslint-disable @typescript-eslint/no-var-requires */
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const nodeModulesRegex = /[\\/]node_modules[\\/]/;

module.exports = (env = {}) => {
    const htmlLoaderOptions = {
        minimize: !env.test,
        removeAttributeQuotes: false,
        keepClosingSlash: true,
        conservativeCollapse: true,
        caseSensitive: true,
        minifyCSS: false,
    };

    return {
        entry: {
            main: './src/main.ts',
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: path.resolve(__dirname, 'src/index.html'),
                },
            ),
            new AngularCompilerPlugin({
                // different config file to exclude .ts files not directly related (imported) by app
                // for example: stories, test files, etc
                tsConfigPath: './tsconfig.app.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: !env.test,
            }),
        ],
        module: {
            rules: [
                {
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                    loader: '@ngtools/webpack',
                },
                // HTML files not in AngularJS folders, intended to be used in components to
                // require the template as a string.
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            ...htmlLoaderOptions,
                        },
                    },
                },
            ],
        },
    };
};

module.exports.nodeModulesRegex = nodeModulesRegex;
