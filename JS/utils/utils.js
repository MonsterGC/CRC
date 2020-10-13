var mid = {
    '0': '00110000', '1': '00110001', '2': '00110010', '3': '00110011',
    '4': '00110100', '5': '00110101', '6': '00110110', '7': '00110111',
    '8': '00111000', '9': '00111001', 'A': '01000001', 'B': '01000010',
    'C': '01000011', 'D': '01000100', 'E': '01000101', 'F': '01000110',
    '%': '00100101'
}

/**
 * 字符转ASCII(二进制格式)
 * @param {*} str 
 */
exports.charToAscii = function (str) {
    var toStr = ''
    for (var i = 0; i < str.length; ++i) {
        toStr += mid[str[i]]
    }
    return toStr
}

/**
 * 交换key & value
 * @param {*} middle 
 */
var exchange = function (middle) {
    var tmp = {}
    for (x in middle) {
        tmp[middle[x]] = x
    }
    return tmp
}

exports.asciiToChar = function (str) {
    var tmp = exchange(mid)
    var tmpStr = ''
    for (var i = 0; i < str.length; i += 8) {
        tmpStr += tmp[str.slice(i, i + 8)]
    }
    console.log(tmpStr)
    return tmpStr
}

/**
 * 将字符串编码
 * @param {*} str 
 */
exports.toEncode = function (str) {
    return encodeURI(str)
}

/**
 * 将字符串解码
 * @param {*} str 
 */
exports.toDecode = function (str) {
    return decodeURI(str)
}