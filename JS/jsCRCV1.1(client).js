const utils = require('./utils/utils')
const keys = require('./utils/keys')

// 发送端发送
utils.readFile('./JS/input.txt').then((str) => {
    // 发送端求余数
    var M = utils.charToAscii(utils.toEncode(str))
    console.log(M)
    var P = keys.P  // 定义除数
    var len = P.length - 1
    while (len--) {
        M += '0'
    }
    console.log(`除数${P}`)
    console.log(`被除数${M}`)
    var R = utils.auth(M, P)
    console.log(`余数:${R}`)
    M = M.slice(0, M.length - P.length + 1) + R
    console.log(`发送的序列${M}`)

    // 保存发送序列
    utils.writeFile(M, './JS/output.txt')
})