// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  devServer: {
    proxy: 'http://localhost:7002'
  },
  // pages: {
  //   index: {
  //     title: "article"
  //   }
  // }
}