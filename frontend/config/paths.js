import path from 'path'

const root = path.resolve(__dirname, '..')

export const distPath = path.resolve(root, 'dist')
export const srcPath = path.resolve(root, 'src')
export const firstWidgetPath = path.resolve(srcPath, 'first-widget')
export const secondWidgetPath = path.resolve(srcPath, 'second-widget')
