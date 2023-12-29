const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    settings: {
        react: {version: '18.2'},
        'import/resolver': {
            'typescript': {}
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'react',
        'import',
        'react-hooks',
        'unused-imports',
        'jsx-a11y',
        'prettier'
    ],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            files: ['*.ts', '*.tsx', '*.cjs', '*.mjs'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
    ],
    rules: {
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            },
        ],
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'error',
        'no-console': 'error',
        'no-unused-vars': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
}

module.exports = config;
