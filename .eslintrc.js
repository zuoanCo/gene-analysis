module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    parser: 'babel-eslint',
  },
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    //'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-var-requires': 'off'
  },
};
