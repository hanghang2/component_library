module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        // "@vue/prettier"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        'no-mixed-spaces-and-tabs':0,// 禁止空格和 tab 的混合缩进
        "indent": ["error","tab"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                mocha: true
            }
        }
    ]
};
