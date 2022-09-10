const fs = require('fs');
const path = require('path');

// 出现路径拼接错误问题,是因为提供了./  ../ 开头的相对路径
// 如果要解决这个问题,可以直接提供一个完整的文件存放路径就行
// fs.readFile('1.txt', 'utf-8', function (err, dataStr) {
// 2.1打印失败的结果
// if (err) {
// console.log('文件读取失败');
// }
// console.log('---------------');
// 2.2打印成功的结果
// console.log('文件读取成功');
// })


// 完整存放路径方法(要把里面的斜杠修改成双斜杠方法)
// 移植性差,不利于维护
// fs.readFile('D:\\Microsoft VS Code\\源代码\\nodejs\\text\\1.txt', 'utf-8', function (err, dataStr) {
// 2.1打印失败的结果
// if (err) {
// console.log('文件读取失败');
// }
// console.log('---------------');
// 2.2打印成功的结果
// console.log('文件读取成功');
// })

// __dirname(双下划线dirname)表示当前文件所处的目录,所代表的值不会根据执行的node命令时所处的目录而动态变化
fs.readFile(__dirname + '/1.txt', 'utf-8', function (err, dataStr) {
    // 2.1打印失败的结果
    if (err) {
        return console.log('文件读取失败');
    }
    // console.log('---------------');
    // 2.2打印成功的结果
    console.log('文件读取成功');
})


