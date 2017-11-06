// https://nuxtjs.org/api/internals-module-container
module.exports = function BaseModule(moduleOptions) {
  const options = Object.assign({}, this.options.base, moduleOptions)

  // Messages
  if (options.overrideMessages !== false) {
    Object.assign(this.options.messages, {
      'error_404': 'Page not found',
      'server_error': 'Server error',
      'back_to_home': 'Back to home page'
    }, options.messages)
  }

  // Router
  if (options.overrideRouter !== false) {
    Object.assign(this.options.router, {
      linkExactActiveClass: 'active-link-exact',
      linkActiveClass: 'active-link'
    }, options.router)
  }

  // Head Meta
  if (options.addHeadMeta !== false) {
    this.options.head.meta.unshift({
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    })
  }

  // Head Links
  if (options.addHeadLinks !== false) {
    this.options.head.link.unshift({
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    })
  }

  // Normalize CSS
  if (options.addNormalizeCSS !== false) {
    this.options.css.push('normalize.css')
  }

  // SVG Loader
  if (options.addSVGLoader !== false) {
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
