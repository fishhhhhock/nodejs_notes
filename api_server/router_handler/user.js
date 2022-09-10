// 定义和用户相关的路由处理函数，保证路由模块的纯粹性，所有的路由处理函数，必须抽离到对应的路由处理函数模块中
// 导入数据库操作模块
const db = require('../db/index')
// 导入bcryptjs这个包
const bcrypt = require('bcryptjs')
// 导入生成Token的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    const userinfo = req.body
    // console.log(userinfo);
    // 对表单中的数据，进行合法性校验（不为空
    // if (!userinfo.username || !userinfo.password) {
    // return res.send({ status: 1, message: '用户名或密码不合法' })
    // return res.cc('用户名或密码不合法')
    // }
    // 定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'
    // 如果执行的是select语句，则返回的是数组
    db.query(sqlStr, userinfo.username, (err, results) => {
        // 执行SQL语句失败
        if (err) {
            // return res.send({ ststus: 1, message: 'err.message' })
            return res.cc(err)
        }
        // 判断用户名是否被占用
        if (results.length > 0) {
            // return res.send({ status: 1, message: '用户名被占用!请更换其他用户名' })
            return res.cc('用户名被占用!请更换其他用户名')

        }
        // 调用bcrypt.hashSync(明文密码，随机盐的长度)对密码进行加密        // 
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        // 定义插入新用户的SQL语句
        const sql = 'insert into ev_users set ?'
        // 调用db.query()执行SQL语句
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            // 判断SQL语句是否执行成功
            if (err) {
                // return res.send({ status: 1, message: err.message })
                return res.cc(err)
            }
            // 判断影响行数是否为1
            if (results.affectedRows !== 1) {
                // return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
                return res.cc('注册用户失败，请稍后再试！')

            }
            // 注册用户成功
            // res.send({ status: 0, message: '注册成功！' })
            res.cc('注册成功！', 0)
        })
    })
    // TODO:用户名可以使用
}

// 登陆的处理函数
exports.login = (req, res) => {
    // 登陆表单的数据
    const userinfo = req.body
    // 定义SQL语句
    const sql = `select * from ev_users where username=?`
    // 执行SQL语句，根据用户名查询用户信息
    db.query(sql, userinfo.username, (err, results) => {
        // 执行语句失败
        if (err) return res.cc(err)
        // 执行SQL语句成功，但是获取到的数据条数不等于1
        if (results.length !== 1) return res.cc('登陆失败!')

        // 判断密码是否正确
        // 调用 bcrypt.compareSync(用户提交的密码, 数据库中的密码) 方法比较密码是否一致
        // 返回值是布尔值（true 一致、false 不一致）
        const compareResult = bcrypt.compareSync(userinfo.password,results[0].password)
        if(!compareResult) return res.cc('登陆失败！')

        // TODO:在服务器端生成token字符串
        // 通过 ES6 的高级语法，快速剔除 密码 和 头像 的值
        // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
        const user = { ...results[0],password:'',user_pic:''}
        // 对用户的信息进行加密，生成Token字符串
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{ expiresIn:config.expiresIn })
        // 调用res.send()将Token响应给客户端
        res.send({
            status:0,
            message:'登陆成功!',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr
        })
    })

}