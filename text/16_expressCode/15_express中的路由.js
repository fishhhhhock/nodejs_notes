// express中，路由指的是客户端的请求与服务器处理函数之间的映射关系
// express中的路由分3部分，分别是请求类型、请求的URL地址、处理函数

// 路由的匹配过程：
// 每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功后才会调用相应的函数
// 匹配时会按路由的顺序匹配，如果请求类型和请求的URL同时匹配成功，则express会将这次请求转交给对应的function函数进行处理 

const express = require('express')
const app = express()

// 挂载路由
app.get('/',(req,res) => {
    res.send('hello world.')
})

app.post('/',(req,res)=>{
    res.send('Post Request.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})