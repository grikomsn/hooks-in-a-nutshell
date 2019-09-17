const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules[0].include.push(path.resolve(__dirname, '../..'))
  config.module.rules[0].exclude.push(
    path.resolve(__dirname, '../../node_modules')
  )

  return config
}
