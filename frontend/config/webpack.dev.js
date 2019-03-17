import { firstWidgetPath, secondWidgetPath } from './paths'

export const devConfig = {
  devServer: {
    contentBase: [firstWidgetPath, secondWidgetPath],
    port: 1337,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
