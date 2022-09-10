// path模块是用来处理路径的模块
// path.join()方法,用来将多个路径片段拼接成一个完成的路径字符串
const path = require('path')
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr);//输出 \a\b\d\e 因为../抵消了前面一个路径  ./没有抵消功能

const pathStr2 = path.join(__dirname,'./files/1.txt')
console.log(pathStr2);//输出  当前文件所处目录\files\1.txt

fs.readFile(path.join(__dirname,'/1.txt'), 'utf-8', function (err, dataStr) {
    // 2.1打印失败的结果
    if (err) {
        return console.log('文件读取失败');
    }
    // console.log('---------------');
    // 2.2打印成功的结果
    console.log('文件读取成功');
})

// path.basename()方法,可以获取路径中的最后一部分,经常通过这个方法获取路径中的文件名
// path.basename(path[,ext])
// path:必选参数,表示一个路径的字符串
// ext:可选参数,表示文件扩展名
// 返回表示路径中的最后一部分

const fpath = '/a/b/c/index.html'//文件的存放路径
 var fullName = path.basename(fpath)
 console.log(fullName);//输出index.html

 var nameWithoutExt = path.basename(fpath,'.html')
 console.log(nameWithoutExt);//输出 index

//  path.extname()方法:可以获取路径中的扩展名部分
const ppath = '/a/b/c/index.html'
const fext = path.extname(ppath)
console.log(fext);//输出.html