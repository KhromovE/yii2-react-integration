import webpackMerge from 'webpack-merge'

import { devConfig } from './config/webpack.dev'
import { prodConfig } from './config/webpack.prod'
import { distPath, firstWidgetPath, secondWidgetPath } from './config/paths'

const ENV = process.env.NODE_ENV
const AVAILABLE_ENV = ['test', 'production', 'development']

if (!AVAILABLE_ENV.includes(ENV)) {
  throw new Error(`${ENV} is not valid environment!`)
}

const config = {
  development: devConfig,
  production: prodConfig,
}[ENV]

const commonConfig = {
  entry: {
    firstWidget: firstWidgetPath,
    secondWidget: secondWidgetPath,
  },
  mode: ENV,
  output: {
    filename: '[name].js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true
        },
      }
    },
  }
}

export default webpackMerge.smart(commonConfig, config)