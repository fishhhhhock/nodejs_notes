const express = require('express')
const app = express()

// 这是定义全局中间件的简写方法
// 中间件的作用：多个中间件之间共享同一份req和res,所以可以在上游的中间件中统一为req和res对象添加自定义属性和方法以供下游的中间件或路由使用
app.use((req,res,next)=>{
    const time = Date.now()//获取请求到达服务器的时间
    // 为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})
// 可以使用app.use()连续定义多个全局中间件，客户端请求到达服务器之后，会按照中间件定义的先后顺序依次调用

app.get('/',(req,res)=>{
    // const time = Date.now()//获取请求到达服务器的时间
    res.send('Home page.' + req.startTime) 
})
app.get('/user',(req,res)=>{
    res.send('User page.' + req.startTime)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})