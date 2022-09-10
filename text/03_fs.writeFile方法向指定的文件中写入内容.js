// fs.writeFile(file,data[,options],callback)
// 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
// 参数2：必选参数，表示要写入的内容
// 参数3：可选参数，表示以什么格式写入文件内容，默认是utf8
// 参数4：必选参数：文件写入完成后的回调函数

// 1.导入fs文件系统模块
const fs = require('fs')

// 2.调用fs.writeFile()方法，写入文件内容
fs.writeFile('2.txt','like candy sugar so sweet',function(err){
    // 如果文件写入成功，则err的值等于null
    // 如果文件写入失败，则err的值等于一个错误对象
    // console.log(err);

    // 判断文件是否写入成功
    if(err){
        return console.log('文件写入失败！'+err.message);
    }
    console.log('文件写入成功！');
})