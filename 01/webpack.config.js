const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
              plugins: ['transform-class-properties']
            }
          }
        },
        {
          test: /\.hbs$/,
          use: [
            'handlebars-loader'
          ]
        }
      ]
    },
    plugins: [
      new TerserPlugin(), //to reduce bundle.js file. all webpack plugins need --save-dev,
      new MiniCssExtractPlugin({ //to extract css from bundle.js
        filename: 'style.[contenthash].css' //can specify file name
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          path.join(process.cwd(), 'dip/**/*')
        ]
      }),
      new HtmlWebpackPlugin({
        title: 'Hello world',
        // filename: 'subfolder/custom_filename.html',
        template: 'src/index.hbs',
        description: 'Some description'
      })
    ]
};