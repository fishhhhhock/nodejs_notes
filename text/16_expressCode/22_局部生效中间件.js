// 不使用app.use()定义的中间件，叫做局部生效的中间件
const express = require('express')
const app = express()


// 定义中间件函数mw1
const mw1 = function(req,res,next){
    console.log('这是中间件函数');
    next()
}
const mw2 = function(req,res,next){
    console.log('调用了第二个局部生效的中间件');
    next()
}


// mw1这个中间件只在'当前路由中生效'，这种用法属于'局部生效的中间件'
// app.get('/',[mw1,mw2],function(req,res){
app.get('/',mw1,mw2,function(req,res){
    req.sed('Home page')
})
// mw1这个中间件不会影响下面这个路由
app.get('/user',function(req,res){
    res.send('User page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
