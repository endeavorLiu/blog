const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const themeConf = require("./config/themeConf")

module.exports = {
  base: '/blog/',
  title: '不远遐路，幸见光临',
  description: 'Just playing around',
  head: headConf,
  plugins: pluginsConf,
  themeConfig: themeConf
}