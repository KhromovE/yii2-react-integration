import { LoaderOptionsPlugin } from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export const prodConfig = {
  devtool: 'cheap-source-map',
  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}
