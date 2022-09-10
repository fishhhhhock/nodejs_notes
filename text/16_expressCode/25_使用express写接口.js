const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 必须要在配置cors中间件之前声明JSONP接口
app.get('/api/jsonp',(req,res)=>{
    // 定义 JSONP 接口的具体实现过程
    // 1.得到函数的名称(callback属性：客户端将来在请求接口时需要提供一个查询字符串，里面包含callback属性，值就是函数的名称)
    const funcNAme = req.query.callback
    // 2.定义要发送的客户端的数据对象
    const data = {name:'zs',age:22}
    // 3.拼接出一个函数的调用
    const scriptStr = `${funcNAme}(${JSON.stringify(data)})`
    // 4.把拼接的字符串相应给客户端
    res.send(scriptStr)
})

// 一定要在路由之前进行配置，cors这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./26_apirouter')
// 把路由模块，注册到app上,也相当于注册了一个全局中间件
app.use('/api',router)

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
