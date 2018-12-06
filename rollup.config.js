import buble from 'rollup-plugin-buble'
import pkg from './package.json'

export default [{
  entry: 'src/index.js',
  targets: [{
    dest: pkg.main,
    format: 'cjs'
  }],
  plugins: [
    buble({
      exclude: ['node_modules/**']
    })
  ]
}]
