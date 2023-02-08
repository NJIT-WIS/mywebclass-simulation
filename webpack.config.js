const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './public_html'),
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
        static: './public_html',
        hot: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            title: "MyWebClass.org",
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }

        }),
    ],
    module: {
        rules: [
            {
    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/i,
    type: 'asset/resource',
    generator: {
        //filename: 'fonts/[name]-[hash][ext][query]'
        filename: 'fonts/[name][ext][query]'
    }
        },
            {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader'
            },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }],
    }

};
