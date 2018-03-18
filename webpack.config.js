const path = require('path')
module.exports = {
   context: __dirname,
   entry: './js/clientApp',
   devtool: 'cheap-eval-source-map',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/assets/'
   },
   resolve: {
      extensions: ['.js', '.jsx', ',json']
   },
   devServer: {
      publicPath: '/public/',
      port: 2110,
      open: true,
      historyApiFallback: true
   },
   stats: {
      colors: true,
      reasons: true,
      chunks: true
   },
   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.jsx?/,
            loader: 'eslint-loader',
            exclude: /node_modules/
         },
         {
            test: /\.jsx?/,
            loader: 'babel-loader'
         }
      ]
   }
}
