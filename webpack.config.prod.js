const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, "src"),
};
// Look for .html files
const htmlFiles = [];
const directories = ['src'];
while (directories.length > 0) {
  const directory = directories.pop();
  const dirContents = fs.readdirSync(directory).map((file) =>
    path.join(directory, file)
  );

  htmlFiles.push(
    ...dirContents.filter((file) => file.endsWith('.html'))
  );
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory())
  );
}

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './docs'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { drop_console: true },
        },
      }),
    ],
  },
  plugins: [
    ...htmlFiles.map(
      (htmlFile) =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(path.normalize('src/'), ''),
          inject: true,
        })
    ),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 80,
        }),
        imageminPngquant({
          quality: [0.8, 0.9],
        }),
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src', 'client')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'import',
                  { libraryName: 'antd', style: true },
                  'antd',
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|ico)$/i,
        type: 'asset',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [0.9, 0.95],
              },
            },
          },
        ],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: 'assets/images/[name]-[contenthash][ext]',
        },
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
