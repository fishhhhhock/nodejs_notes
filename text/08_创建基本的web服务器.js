// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.使用服务器实例的.on()方法，为服务器实例绑定request事件,监听客户端的请求
server.on('request',function(req,res){
    // 只要有客户端来请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server.');
})
// 4.调用server.listen(端口号，cb回调)方法，启动web服务器
server.listen(8080,function(){
    console.log('server running at http://127.0.0.1:8080');
})