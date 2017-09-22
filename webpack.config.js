const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./index.jsx",
  output: {
    filename: "built.js",
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: [__dirname, 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-class-properties'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?modules,localIdentName=[name]__[local]--[hash:base64:5]!sass-loader',
        }),
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
  ],
};
