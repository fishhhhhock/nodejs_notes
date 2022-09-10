// 1.导入fs模块
const fs = require('fs')

// 2.调用fs.readFile()读取文件内容
fs.readFile('../素材/成绩.txt','utf8',function(err,dataStr){
    // 3.判断是否读取成功
    if(err){
        return console.log('读取文件失败' + err.message);
    }
    // console.log('读取文件成功' + dataStr);

    // 4.1先把成绩的数据，按照空格进行分割，使用split方法，把字符串分割成字符串数组
    const arrOld = dataStr.split(' ')
    // console.log(arrOld);

    // 4.2循环分割后的数组，对每一项数据进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=','：'))
    })

    // 4.3把新数组中的每一项进行合并，得到一个新字符串,使用join方法，将数组中的元素转换为字符串
    const newStr= arrNew.join('\r\n')
    // console.log(newStr);

    // 5.调用fs.writeFile方法将字符串写入新文件中
    fs.writeFile('../素材/成绩-ok.txt',newStr,function(err){
        if(err){
            console.log('文件写入失败' + err.message);
        }
        console.log('文件写入成功');
    })

})