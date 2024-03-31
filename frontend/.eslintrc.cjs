module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-refresh', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
    },
};
