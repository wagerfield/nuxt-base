import Vue from 'vue'

Vue.mixin({
  beforeCreate() {
    Object.assign(this, this.$options.constants)
  }
})
