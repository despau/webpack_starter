const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      'hello-world': './src/hello-world.js',
      'cube': './src/cube.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
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
      // new TerserPlugin(), --added by default in production
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*'
        ]
      }),
      new HtmlWebpackPlugin({
        filename: 'hello-world.html',
        chunks: ['hello-world', 'vendors~hello-world~cube'],
        title: 'Hello world',
        template: 'src/page-template.hbs',
        description: 'Hello world descriptum'
      }),
      new HtmlWebpackPlugin({
        filename: 'cube.html',
        chunks: ['cube', 'vendors~hello-world~cube'], //to specify which bundles (from dist css and js) to pass
        title: 'cube',
        template: 'src/page-template.hbs',
        description: 'Cube image display'
      })
    ]
};