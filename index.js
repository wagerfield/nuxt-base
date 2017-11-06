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

  // CSS
  if (options.addNormalizeCSS !== false) {
    this.options.css.push('normalize.css')
  }
}

module.exports.meta = require('./package.json')
