const http = require('http')
const server = http.createServer()
// req是请求对象,包含了与客户端相关的数据和属性
// res是响应对象，它包含了与服务器相关的数据和属性

server.on('request',(req,res) => {
    // req.url是客户端请求的URL地址
    const url = req.url
    // req.method是客户端请求的method类型
    const method = req.method
    // const str = `Your request url is ${url},and request method is ${method}`
    const str = `你请求的url地址是 ${req.url},请求的method类型是 ${method}`
    // console.log(str);
    // 为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html;charsrt=utf-8
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
})
server.listen(80,() => {
    console.log('server running at http://127.0.0.1');
})
