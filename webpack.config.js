const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';
const isAnalyze = !!process.env.ANALYZE;

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDevelopment
                  ? '[name]__[local]-[hash:base64:10]'
                  : '[hash:base64]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  'postcss-preset-env',
                  require('postcss-normalize')(),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // typescript: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
      hash: true,
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'static', noErrorOnMissing: true }],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    isAnalyze && new BundleAnalyzerPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'initial',
          filename: 'vendors.[contenthash].js',
          priority: 1,
          maxInitialRequests: 2, // create only one vendor file
          minChunks: 1,
        },
      },
    },
  },
  entry: { main: path.resolve(__dirname, './src/index.tsx') },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, isDevelopment ? '.dev' : 'build'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      style: path.resolve(__dirname, 'src/styles'), // sass partials importing fix
    },
  },
  devServer: {
    hot: isDevelopment && true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'ws://localhost:8080',
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
      },
    },
    historyApiFallback: true,
  },
};
