// https://nuxtjs.org/api/internals-module-container
module.exports = function BaseModule() {

  // Messages
  this.options.messages['error_404'] = 'Page not found'
  this.options.messages['server_error'] = 'Server error'
  this.options.messages['back_to_home'] = 'Back to home page'
}

module.exports.meta = require('./package.json')
