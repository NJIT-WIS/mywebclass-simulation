const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './public_html')
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: './public_html',
    hot: false,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/article.html',
      filename: 'article.html'

    }),
    new HtmlWebpackPlugin({
      template: 'src/articles.html',
      filename: 'articles.html'
    }),
    new FaviconsWebpackPlugin('src/images/favicon.png') // svg works too!

  ],
  module: {
    rules: [
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/i,
        type: 'asset/resource',
        generator: {
          // filename: 'fonts/[name]-[hash][ext][query]'
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(webmanifest)$/i,
        type: 'asset/resource'
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
      }]
  }

}
