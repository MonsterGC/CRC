const utils = require('./utils/utils')
const keys = require('./utils/keys')

// 发送过程中错误检测
utils.readFile('./JS/output.txt').then((M) => {
    console.log(`发送错误前M:${M}`)
    // 模拟发送过程中存在错误(第一位数据错误)
    tmp = M.split("")
    tmp[0] = tmp[0] == '0' ? '1' : '0'
    M = tmp.join("")
    console.log(`发送错误后M:${M}`)

    var R = utils.auth(M, keys.P)
    console.log(`(错误)检验出来的余数${R}`)
    status = utils.test(R)
    console.log(`(错误)检验${status == 1 ? "成功" : "出错"}`)
})