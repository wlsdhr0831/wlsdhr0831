const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'portfolio.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: { esmodules: true, browsers: ['last 2 versions'] } }],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: { index: "/", disableDotRule: true }
  }
};