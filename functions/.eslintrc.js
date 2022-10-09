module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    },
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    '/lib/**/*'
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
