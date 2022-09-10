const express = require('express')
const app = express()

// 中间件是一个函数，包含 req, res, next 三个参数，next() 参数把流转关系交给下一个中间件或路由

// 定义一个最简单的中间件函数
// const mw = function(req,res,next){
    // console.log('这是最简单的中间件函数');
    // 把流转关系，转交给下一个中间件或路由
    // next()
// }
// 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件，通过调用app.use(中间件函数)即可定义全局生效的中间件
// 将mw注册为全局生效的的=中间件
// app.use(mw)

// 这是定义全局中间件的简写方法
// 中间件的作用：多个中间件之间共享同一份req和res,所以可以在上游的中间件中统一为req和res对象添加自定义属性和方法以供下游的中间件或路由使用
app.use((req,res,next)=>{
    console.log('这是最简单的中间件函数');
    next()
})

app.get('/',(req,res)=>{
    res.send('Home page.')
})
app.get('/user',(req,res)=>{
    res.send('User page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})