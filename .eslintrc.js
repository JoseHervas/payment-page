module.exports = {
    "rules": {
        "semi": [2, "never"],
        "indent": ["error", 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/forbid-prop-types": 0,
        "react/no-unused-prop-types": 0,
        "react/require-default-props": 0,
        "max-len": ["error", 150, 4],
        "jsx-a11y/no-static-element-interactions": 0,
        "class-methods-use-this": 0,
        "no-useless-return": 0,
        "no-underscore-dangle": ["error", { "allow": ["_", "_l", "_t", "_u", "_locale"], "allowAfterThis": true }],
        "comma-dangle": ["error", "never"],
        "space-in-parens": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "no-confusing-arrow": 0,
        "curly": 0,
        "import/no-unresolved": 0,
        "new-cap": 0,
        "linebreak-style": 0
    },
    "settings": {
        "import/parser": "babel-eslint",
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules","app/src"]
            }
        }
    },
    "globals": {
        "window": true,
        "document": true,
        "_l": true,
        "_t": true,
        "fetch": true,
        "localStorage": true
    },
    "env": {
        "browser": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
}
