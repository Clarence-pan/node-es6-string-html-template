'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.html = html;
exports.raw = raw;
exports.escape = escape;
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
function html(strings) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (args.length === 0 && !Array.isArray(strings)) {
        return raw(strings);
    }

    var ret = [];
    strings.forEach(function (s, i) {
        ret.push(s);

        var arg = args[i];

        if (Array.isArray(arg)) {
            arg.forEach(function (a) {
                return void ret.push(escape(a));
            });
        } else if (!arg) {
            // ignored falsy values
        } else {
            ret.push(escape(arg));
        }
    });

    return raw(ret.join(''));
}

/**
 * 转换为真正的字符串，并移除首尾的空白
 * @param strings
 * @param args
 * @returns {string}
 */
html.trim = function (strings) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    return (html.apply(undefined, [strings].concat(args)) + '').trim();
};

/**
 * 原始对象，不会被escape所转义
 * @constructor
 * @param value  字符串值
 * @returns {raw}
 */
function raw(value) {
    if (this instanceof raw) {
        // 原始对象的值
        this.v = value + '';
        return this;
    } else {
        // 默认创建一个raw对象
        return new raw(value);
    }
}

/**
 * 重载toString返回当前的值
 * @returns {string|*}
 */
raw.prototype.toString = function () {
    return this.v;
};

/**
 * 转义模版
 * @param str
 * @returns {*}
 */
function escape(str) {
    if (str instanceof raw) {
        return str + '';
    }

    return (str + '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&#34;').replace(/'/g, '&#39;');
}