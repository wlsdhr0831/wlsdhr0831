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
    path: path.join(__dirname, 'dist'),
    filename: 'blockVillageFrontend.js',
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    proxy: {
        "/" : {
            target: "http:170.0.0.1:8000/",
            changeOrigin: true
        }
    }
  }
};