// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    semi: [2, 'always'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'v-bind': 'shorthand'
  }
};
