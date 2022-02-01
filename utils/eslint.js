module.exports = {
    extends: [
        'eslint-config-airbnb-base'
    ].map(require.resolve),
    rules: {
        indent: [
            'error', 4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            'always'
        ],
        'no-cond-assign': [
            'error',
            'always'
        ],
        'no-console': 'off',
    }
};
