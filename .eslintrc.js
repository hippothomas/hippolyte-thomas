module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // Prettier adds slash at end and so we need to turn this off or it will conflict
    'vue/html-self-closing': 'off',

    // Prettier has an indent already set so this conflicts with it
    'vue/html-indent': 'off'
  },
}
