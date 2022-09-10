const express = require('express')
const app = express()
// 定义路由
app.get('/',(req,res)=>{
// 人为制造错误
    throw new Error('服务器内部发生错误')
    next()
})


// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误' + err.message);
    res.send('Error:' + err.message)
})
// 调用app.listen方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
