// 启用babel实时转译功能
require('babel-register')({
    extensions: ['.js'],
    "presets": [
        [
            "env",
            {
                "es2015": {
                    "modules": false
                }
            }
        ],
        "stage-2"
    ],
    "plugins": [
        "transform-runtime"
    ],
    "comments": false,
})

// 加载power-assert的loader，让assert更简单
require('intelli-espower-loader')

