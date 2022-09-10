// 1.导入fs模块，来操作文件
const fs = require ('fs')

// 2.调用 fs.readFile()方法读取文件
// 参数一：读取文件的存放路径
// 参数2：读取文件时采用的编码格式，一般默认指定utf8/utf-8
// 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('1.txt','utf-8',function(err,dataStr){
    // 2.1打印失败的结果
    // 如果读取成功，则err的值为null
    console.log(err);
    console.log('---------------');
    // 2.2打印成功的结果
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    console.log(dataStr);
})