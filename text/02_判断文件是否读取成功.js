// 可以判断err对象是否为null,从而知晓文件读取的结果：
const fs = require('fs')
fs.readFile('1.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功，内容是：' + result);
})