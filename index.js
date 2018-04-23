const path = require('path')

// https://nuxtjs.org/api/internals-module-container
module.exports = function NuxtBase(options) {
  const opts = Object.assign({}, this.options.base, options)

  // Messages
  if (opts.overrideMessages !== false) {
    Object.assign(this.options.messages, {
      'error_404': 'Page not found',
      'server_error': 'Server error',
      'back_to_home': 'Back to home page'
    }, opts.messages)
  }

  // Router
  if (opts.overrideRouter !== false) {
    Object.assign(this.options.router, {
      linkExactActiveClass: 'active-link-exact',
      linkActiveClass: 'active-link'
    }, opts.router)
  }

  // Constants Plugin
  if (opts.addConstantsPlugin !== false) {
    this.addPlugin(path.resolve(__dirname, 'plugins/constants.js'))
  }

  // Head Meta Tags
  if (opts.addHeadMetaTags !== false) {
    this.options.head.meta.unshift({
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    })
  }

  // SVG Loader
  if (opts.addSVGLoader !== false) {
    this.extendBuild((config) => {
      config.module.rules
        .find((rule) => rule.loader === 'url-loader')
        .test = /\.(png|jpg|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    })
  }
}

module.exports.meta = require('./package.json')
