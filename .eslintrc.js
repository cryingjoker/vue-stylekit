module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['prettier', 'prettier/standard','plugin:prettier/recommended', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    semi: [2, 'always'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'v-bind': 'shorthand'
  }
};
