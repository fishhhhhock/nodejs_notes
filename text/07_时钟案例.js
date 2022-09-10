// 1.1 导入fs模块
const fs = require('fs')
// 1.2 导入path模块
const path = require('path')

// 1.3 定义正则表达式,分别匹配<style></style>和<script><script>标签
// \s表示匹配空白字符  \S匹配非空白字符  *表示任意多个
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'../素材/index.html'),'utf8',function(err,dataStr){
    // 2.2读取HTML文件失败
    if(err) return console.log('读取文件失败' + err.message);
    //2.3读取文件成功后,调用对应的三个方法,分别拆解出css,js,html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1定义处理CSS样式的方法
function resolveCSS(htmlStr){
    // 3.2使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log( r1);//打印出来是数组的形式
    // 3.3将提取出来的样式字符串,进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // 3.4调用fs.writeFile()方法,将提取的样式,写入到素材文件夹中index.css文件里
    fs.writeFile(path.join(__dirname,'../素材/index.css'),newCSS,function(err){
        if(err) return console.log('写入CSS样式失败' + err.message);
        console.log('写入文件成功');
    })
}

// 4.1定义处理JS样式的方法
function resolveJS(htmlStr){
    // 4.2使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    // console.log( r2);//打印出来是数组的形式
    // 4.3将提取出来的样式字符串,进行字符串的replace替换操作
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    // 4.4调用fs.writeFile()方法,将提取的样式,写入到素材文件夹中index.JS文件里
    fs.writeFile(path.join(__dirname,'../素材/index.js'),newJS,function(err){
        if(err) return console.log('写入CSS样式失败' + err.message);
        console.log('写入文件成功');
    })
}

// 5.1定义处理HTML样式的方法
function resolveHTML(htmlStr){
    // 5.2使用replace替换操作,将内嵌的style和script标签替换为外联样式
    const newHTML = htmlStr
    .replace(regStyle,'<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript,'<script src="./index.js"></script>')
    // 5.3将替换完成之后的html代码写入到index.html文件中
    fs.writeFile(path.join(__dirname,'../素材/index.html'),newHTML,function(err){
        if(err) return console.log('写入CSS样式失败' + err.message);
        console.log('写入文件成功');
    })
}

