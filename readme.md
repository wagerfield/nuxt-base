# Base Module for Nuxt.js

### Installation

    yarn add nuxt-base

### Setup

    // nuxt.config.js
    module.exports = {
        modules: [
            'nuxt-base'
        ]
    }

### Configuration

    // nuxt.config.js
    module.exports = {
        modules: [
            'nuxt-base'
        ],
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
            addHeadMetaTags: true,
            addHeadLinkTags: true,
            addNormalizeCSS: true,
            addSVGLoader: true,
            addI18n: true
        }
    }
