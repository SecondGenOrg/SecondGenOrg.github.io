var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = ['/home', '/events', '/chapters', 
    '/start-chapter', '/become-mentor', '/join-team', 
    '/partner', '/mentors', '/videos', 
    '/student-pack', '/curriculum', '/camps'];

module.exports = {
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, {})
  ]
}