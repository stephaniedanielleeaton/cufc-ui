// .eslintrc.cjs
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
        'unused-imports'
    ],
    rules: {
        'prettier/prettier': 'error',
        'unused-imports/no-unused-imports': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
