const path = require('path')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, '../assets/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vuex$': 'vuex/dist/vuex.js',
      semantic: path.resolve(__dirname, './semantic/dist'),
      resource: path.resolve(__dirname, './assets/images'),
      scss: path.resolve(__dirname, './src/scss'),
      js: path.resolve(__dirname, './src/js'),
      view: path.resolve(__dirname, './src/view'),
      comp: path.resolve(__dirname, './src/view/component'),
    },
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProd ? '"production"' : '"development"',
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Vue: 'vue',
      Vuex: 'vuex',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    proxy: {
      '/': {
        target: `http://localhost:1337`,
        secure: false,
      },
    },
  },
}

if (isProd) {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
