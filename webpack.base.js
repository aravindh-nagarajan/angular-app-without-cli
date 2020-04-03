const { AngularCompilerPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
    const htmlLoaderOptions = {
        minimize: false,
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
