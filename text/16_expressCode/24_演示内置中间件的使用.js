const express = require('express')
const app = express()


// 除了错误级别的中间件，其他中间件都需要在路由之前进行配置
// 通过express.json()这个中间件，解析表单中的JSON格式的数据
app.use(express.json())
// express.urlencoded解析URL-encoded格式的请求体数据
app.use(express.urlencoded({extended:false}))

app.post('/user',(req,res)=>{
    // 在服务器，可以使用req.body属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
    res.send('ok')
})

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
