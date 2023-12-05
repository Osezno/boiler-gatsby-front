module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:mdx/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': ['error', { 'ignoreRestArgs': false }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 0,
    'jsx-a11y/no-onchange': 0,
    'import/no-named-as-default': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'quotes': ['error', 'single'],
    'react/jsx-equals-spacing': [2, 'never'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
        return: false,
        arrow: false,
        condition: false,
        logical: false,
        prop: false
      }
    ],
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'max-len': ['error', { 'code': 100 }],
    'object-curly-spacing': [
      'error',
      'always',
      { 'objectsInObjects': true, 'arraysInObjects': true }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/order': [
      'error',
      { groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'] }
    ],
    '@typescript-eslint/no-empty-function': ['off'],
    'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
    'react/jsx-curly-spacing': ['error', { when: 'never' }],
    'space-in-parens': ['error', 'never'],
    'prefer-const': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-before-blocks': 'error',
    'react/jsx-key': [0, { checkFragmentShorthand: true }]
  },
  settings: {
    // Add aliases support with eslint-import-resolver-alias
    'import/resolver': {
      alias: {
        map: [
          ['@test-utils', './test/test-utils.tsx'],
          ['@theme', './config/theme.ts'],
          ['@utils','./src/common/utils'],
          ['@hooks','./src/common/hooks'],
          ['@components', './src/common/components'],
          ['@assets','./src/common/assets'],
          ['@ion', './src']
        ],
        extensions: ['.tsx', '.ts', '.js']
      }
    },
    // Needs to set for eslint-plugin-react
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      // Add support for mdx files with eslint-plugin-mdx.
      // Simply adding it in 'extends' doesn't work
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides']
    }
  ]
}
