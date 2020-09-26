module.exports = {
    "env": {
        "browser": true
    },

    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],

        "linebreak-style": [
            "error",
            //"unix"
            "windows"
        ],

        "quotes": [
            "error",
            "double"
        ],

        "semi": [
            "error",
            "always"
        ]
    }
};