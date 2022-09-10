// 简单请求
// 请求方式：GET、POST、HEAD 三者之一
// HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值 application/x-www-formurlencoded、multipart/form-data、text/plain）
// #预检请求
// 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
// 请求头中包含自定义头部字段
// 向服务器发送了 application/json 格式的数据
// 在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据