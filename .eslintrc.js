// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module'
    },
    env: {
        browser: true,
        "es6": true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
        "standard",
        "plugin:vue/recommended",
        "prettier"
    ],
    plugins: [
        "html",
        "standard",
        "vue"
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/singleline-html-element-content-newline': 'off',

    }

};