module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './.eslintrc.js', './.env'],
  },

  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
