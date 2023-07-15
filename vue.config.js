const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'QRsc4n',
    themeColor: '#151515',
    msTileColor: '#151515',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#151515',
    workboxOptions: {
      skipWaiting: true
    }
  },
})
