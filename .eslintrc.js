module.exports = {
    root: true,
    env: {
        'browser': true,
        'es6': true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    plugins: [
        'vue',
        'prettier'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
            // https://prettier.io/docs/en/options.html
            {
                singleQuote: true,
                semi: true,
                useTabs: true,
                tabWidth: 2,
                trailingComma: 'all',
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
                jsxBracketSameLine: true
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
}