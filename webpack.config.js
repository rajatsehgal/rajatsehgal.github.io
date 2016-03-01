module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname + '/built',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};