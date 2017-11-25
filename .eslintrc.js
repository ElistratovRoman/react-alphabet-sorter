module.exports = {
  "parser": "babel-eslint",

  "extends": [
    "standard",
    "standard-react",
  ],

  "env": {
    "browser": true,
    "node": true
  },

  "plugins": [
    "standard",
    "promise",
  ],

  "rules": {
    "newline-after-var": [
      "error",
      "always",
    ],

    "one-var-declaration-per-line": [
      "error",
      "always",
    ],

    "indent": ["error", 2, {
      SwitchCase: 1,
    }],

    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore",
    }],

    "space-before-function-paren": 0,

    "jsx-quotes": [
      "error",
      "prefer-double",
    ],

    "react/jsx-space-before-closing": [
      "error",
      "never",
    ],

    "react/no-unused-prop-types": 0,

    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never"
    }],

    "react/jsx-curly-spacing": ["error", "always", {
      "spacing": {
        "objectLiterals": "never",
      },
    }],

    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
  }
}
