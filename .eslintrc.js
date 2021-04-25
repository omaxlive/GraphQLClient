module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-typescript-prettier',
    // airbnb
    'airbnb',
    'airbnb/hooks',
    // import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // prettier
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'import', 'react'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    // eslint is not able to detect that a function with parameters belong to an interface so it complains with no-unused-vars (useLayout.ts:L6)
    // As seen here, we must tell eslint to not use this rule and instead, use @typescript-eslint/no-unused-vars
    // https://stackoverflow.com/questions/55807329/why-eslint-throws-no-unused-vars-for-typescript-interface
    'no-unused-vars': 'off',

    // In React 17, The JSX scope is global
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off',

    // As specified here: https://github.com/uberforcede/wg-core-guidelines/tree/master/javascript/react#props
    // We're encouraged not to use propTypes
    'react/require-default-props': 'off',
    'react/prop-types': 'off',

    // This is a special situation of NextJS
    // In Next, the <Link /> components needs an <a> tag right below the <Link /> component in order to pass down all the properties. This <a> tag doesn't need an href prop as it's passed by the Link tag so eslint complains. This rules attempts to fix those links that are next to a <Link /> component.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // react

    // Only .jsx and .tsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Disable usage of unknown DOM property (e.g. allow "class" instead of "className"). [stencil]
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'off',

    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],

    // import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // import

        // Disable ESLint-based module resolution check for improved monorepo support
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',

        // Avoid export default
        // https://basarat.gitbook.io/typescript/main-1/defaultisbad
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
      },
    },
  ],
};
