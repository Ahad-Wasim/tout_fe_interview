const path = require('path');

const baseConfig = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // as per babel-loader requirements (https://github.com/babel/babel-loader#usage)
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ], //  closes rules
  }, // closes module
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
  },
};

// Export the completed config.
// https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
module.exports = function () {
  return baseConfig;
};
