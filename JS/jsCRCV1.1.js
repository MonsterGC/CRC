/**
 * 备注: 此版本可以解析中文，但是不能解析含有符号的中文序列!!!
 * 
 * 例如: ！、.等
 */
const utils = require('./utils/utils')
// 求余数
var auth = function (M, P) {
    var R = P
    var dist = 0
    // 跳过前面的 0
    for (let i = 0; i < M.length; ++i) {
        if (M[i] != '0') {
            dist = i
            break
        }
    }

    console.log(`dist:${dist}`)
    var status = 0
    while (dist <= M.length - P.length) {
        var tmp = []
        if (R.length != P.length) {
            R += M[dist + P.length - 1]
        }
        // console.log(R)
        if (R[0] == '0') {
            tmp = R.split("")
            delete tmp[0]
            R = tmp.join("")
            ++dist
            continue
        }
        for (var i = 0; i < P.length; ++i) {
            if (status < 4) {
                status++
                tmp.push(R[i] ^ M[dist + i])
            } else {
                tmp.push(R[i] ^ P[i])
            }
        }
        delete tmp[0]
        R = tmp.join("")
        ++dist
    }
    return R
}

// 检验
var test = function (R) {
    for (var i = 0; i < R.length; ++i) {
        if (R[i] != '0') return 0
    }
    return 1
}

var str = "你今天真帅喔"
// 发送端求余数
var M = utils.charToAscii(utils.toEncode(str))
console.log(M)
var P = '1101111111100101010'
var len = P.length - 1
while (len--) {
    M += '0'
}
console.log(`除数${P}`)
console.log(`被除数${M}`)
var R = auth(M, P)
console.log(`余数:${R}`)
M = M.slice(0, M.length - P.length + 1) + R
console.log(`发送的序列${M}`)

// 接收端检验
R = auth(M, P)
console.log(`检验出来的余数${R}`)
var status = test(R)
console.log(`检验${status ? "成功" : "出错"}`)
var testM = M.slice(0, M.length - P.length + 1)
console.log(`原文本是:${utils.toDecode(utils.asciiToChar(testM))}`)


// 发送过程中错误检测
console.log(`发送错误前M:${M}`)
tmp = M.split("")
tmp[0] = tmp[0] == '0' ? '1' : '0'
M = tmp.join("")
console.log(`发送错误后M:${M}`)

R = auth(M, P)
console.log(`(错误)检验出来的余数${R}`)
status = test(R)
console.log(`(错误)检验${status == 1 ? "成功" : "出错"}`)