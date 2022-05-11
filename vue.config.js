const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project-items/'
    : '/'
}

module.exports = {
  pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
}