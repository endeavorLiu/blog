const secret = require("./secret")

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'endeavorLiu',
    repo: 'blog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': secret.ga
  }
}