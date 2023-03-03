const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

// Look for .html files
const htmlFiles = []
const directories = ['src']
while (directories.length > 0) {
  const directory = directories.pop()
  const dirContents = fs.readdirSync(directory)
    .map(file => path.join(directory, file))

  htmlFiles.push(...dirContents.filter(file => file.endsWith('.html')))
  directories.push(...dirContents.filter(file => fs.statSync(file).isDirectory()))
}

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './docs'),
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    ...htmlFiles.map(htmlFile =>
      new HtmlWebpackPlugin({
        template: htmlFile,
        filename: htmlFile.replace(path.normalize('src/'), ''),
        inject: true
      })
    )
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|ico)$/i,
        type: 'asset',
        use: [{
          loader: 'image-webpack-loader',
          options: {
            pngquant: {
              quality: [0.90, 0.95]
            }
          }
        }],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: 'assets/images/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(webmanifest)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/i,
        type: 'asset/resource',
        generator: {
          // filename: 'fonts/[name]-[hash][ext][query]'
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
      }]
  }

}
