// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 4.监听客户端的GET和POST请求，并向客户端相应具体的内容
// app.get()方法，可以监听客户端的GET请求
// app.post()方法，监听客户端的POST请求
// 参数1：客户端请求的URL地址
// 参数2：请求对应的处理函数
// req:请求对象（包含了与请求相关的属性与方法
// res:响应对象（包含了与响应相关的属性与方法
// 通过res.send()方法，可以把处理好的内容发送到客户端
app.get('/user',(req,res) => {
    // 调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:'zs',age:20,gender:'女'})
})

app.post('/user',(req,res) => {
    // 调用express提供的res.send()方法
    res.send('请求方法')
})

app.get('/',(req,res)=>{
    // 通过req.query对象可以访问到客户端通过查询字符串的形式，发送到服务器的参数
    // 默认情况下是一个空对象
    // 客户端可以使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数
    // 可以通过req.query对象访问到，例如：req.query.anme req.query.age
    console.log(req.query);
    res.send(req.query)

})

// 获取URL中的动态参数：通过req.params对象，可以访问到URL中，通过:匹配到的动态参数
app.get('user/:id',(req,res)=>{
    // req.params默认是一个空对象
    // 里面存放着通过:动态匹配到的参数值
    console.log(req.params);
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at https://127.0.0.1');
})

