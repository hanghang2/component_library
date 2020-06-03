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
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        'indent': 'off',
        'no-unused-vars': 'off',
        "no-empty": 0,//是否允许空的表达式，if (foo) {}
        "no-extra-boolean-cast": 0,//在条件语句中不允许使用!!  比如 if (!!foo) {   } 
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
