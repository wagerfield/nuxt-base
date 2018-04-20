# Base Module for Nuxt.js

Opinionated config defaults for [Nuxt][nuxt].

## Installation

```bash
yarn add nuxt-base
```

## Setup

```js
// nuxt.config.js
module.exports = {
  modules: [
    'nuxt-base'
  ]
}
```

## Configuration

```js
// nuxt.config.js
module.exports = {
  modules: [
    'nuxt-base'
  ],
  // defaults
  base: {
    overrideRouter: true,
    router: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'active-link-exact'
    },
    overrideMessages: true,
    messages: {
      'error_404': 'Page not found',
      'server_error': 'Server error',
      'back_to_home': 'Back to home page'
    },
    addConstantsPlugin: true,
    addHeadMetaTags: true,
    addHeadLinkTags: true,
    addSVGLoader: true
  }
}
```

## Author

[Matthew Wagerfield][twitter]

## License

[MIT][mit]

[nuxt]:https://nuxtjs.org
[mit]: https://opensource.org/licenses/MIT
[twitter]: https://twitter.com/wagerfield
