const { config } = require('ko-webpack-react');


const options = {
  entry: {
    app: '/src/index.js',
  },
  output: {
    path: ('/dist/js'),
    publicPath: '/dist/js/',
    filename: '[name].js',
  },
};

module.exports = config(options);
