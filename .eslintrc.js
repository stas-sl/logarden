module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'indent': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }]
  }
}
