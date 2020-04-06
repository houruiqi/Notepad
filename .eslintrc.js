module.exports = {
    "env": {
        "browser": true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            {"VariableDeclarator":1}
        ],
        "linebreak-style": [0 ,"error", "windows"],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};