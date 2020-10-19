const utils = require('./utils/utils')
const keys = require('./utils/keys')
// 接收端接收检验
utils.readFile('./JS/output.txt').then((M) => {
    // 接收端检验
    var P = keys.P
    var R = utils.auth(M, P)
    console.log(`检验出来的余数${R}`)
    var status = utils.test(R)
    console.log(`检验${status ? "成功" : "出错"}`)
    var testM = utils.toDecode(utils.asciiToChar(M.slice(0, M.length - P.length + 1)))
    console.log(`检验出来的文本是:${testM}`)
})