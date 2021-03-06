module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/bin',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};