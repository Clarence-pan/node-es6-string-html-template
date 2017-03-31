/**
 * 一个简单的html模版
 * 使用方法参见 www\fill-user-info-dlg\template.js
 * 注意：
 * 1. 默认所有值都将被编码以防XSS/CSRF
 * 2. 如果你确信不需要转义，则请使用raw()函数将值包装一下
 * @param strings
 * @param args
 * @returns {raw} HTML字符串
 */
export function html(strings, ...args) {
    if (args.length === 0 && !Array.isArray(strings)) {
        return raw(strings)
    }

    let ret = []
    strings.forEach((s, i) => {
        ret.push(s)

        let arg = args[i]

        if (Array.isArray(arg)) {
            arg.forEach(a => void ret.push(escape(a)))
        } else if (!arg) {
            // ignored falsy values
        } else {
            ret.push(escape(arg))
        }
    })

    return raw(ret.join(''))
}

/**
 * 转换为真正的字符串，并移除首尾的空白
 * @param strings
 * @param args
 * @returns {string}
 */
html.trim = function(strings, ...args){
    return (html(strings, ...args) + '').trim()
}

/**
 * 原始对象，不会被escape所转义
 * @constructor
 * @param value  字符串值
 * @returns {raw}
 */
export function raw(value) {
    if (this instanceof raw) {
        // 原始对象的值
        this.v = value + ''
        return this
    } else {
        // 默认创建一个raw对象
        return new raw(value)
    }
}

/**
 * 重载toString返回当前的值
 * @returns {string|*}
 */
raw.prototype.toString = function () {
    return this.v
}

/**
 * 转义模版
 * @param str
 * @returns {*}
 */
export function escape(str) {
    if (str instanceof raw) {
        return str + ''
    }

    return (str + '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&#34;')
        .replace(/'/g, '&#39;')
}
