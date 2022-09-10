// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与数据库的关系
const db = mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//登录数据库的账号
    password:'admin123',//登录数据库的密码
    database:'my_db_01'//指定要操作哪个数据库

})

// 测试MySQL模块能否正常工作
/* db.query('select 1',(err,results)=>{
    // MySQL模块工作期间报错了
        if(err) return console.log(err.message);
    // 能够成功执行sql语句:返回[ RowDataPacket { '1': 1 } ]
    console.log(results);
})  */

// 查询users表中所有的数据
/* const sqlStr = 'select * from users'
db.query(sqlStr,(err,results)=>{
    // 查询数据失败
    if(err) return console.log(err.message);
    // 查询成功:如果执行的是select语句，则返回的是数组
    console.log(results);
}) */

// 向users表中，新增一条数据，其中username的值为Spider-Man password值为pcc123
/* const user = { username:'fishing', password:'absd123'}
// 定义待执行的SQL语句
const sqlStr = 'insert into users (username,password) value (?,?)'
// 执行SQL语句
db.query(sqlStr,[user.username,user.password],(err,results)=>{
    // 执行SQL语句失败
    if(err) return console.log(err.message);
    // 执行成功
    // 如果执行的是insert into 语句插入语句，则results是一个对象
    if(results.affectedRows === 1){
        // 可以通过affectRows属性来判断是否插入数据成功
        console.log('插入成功！');
    }
}) */

// 插入数据的便捷方式
/* const user = { username:'fisher', password:'absd345'}
// 定义待执行的SQL语句
const sqlStr = 'insert into users set ?'
// 执行的SQL语句
db.query(sqlStr,user,(err,results)=>{
    // 执行SQL语句失败
    if(err) return console.log(err.message);
    // 执行成功
    // 如果执行的是insert into 语句插入语句，则results是一个对象
    if(results.affectedRows === 1){
        // 可以通过affectRows属性来判断是否插入数据成功
        console.log('插入成功！');
    }
}) */

// 更新用户信息
/* const user = { id:6,username:'aaa',password:'000'}
// 定义SQL语句
const sqlStr = 'update users set username=?,password=? where id=?'
// 执行SQL语句
db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
    if(err) return console.log(err.message);
    // 执行成功
    // 如果执行的是update 语句更新语句，则results是一个对象
    if(results.affectedRows === 1){
        // 可以通过affectRows属性来判断是否更新数据成功
        console.log('更新成功！');
    }

}) */

// 更新用户信息的快捷方式
/* const user = { id:6,username:'aaa',password:'000'}
// 执行的SQL语句
const sqlStr = 'update users set ? where id=?'
// 数组依次为占位符指定的内容
db.query(sqlStr,[user,user.id],(err,results)=>{
    if(err) return console.log(err.message);
    // 执行成功
    // 如果执行的是update 语句更新语句，则results是一个对象
    if(results.affectedRows === 1){
        // 可以通过affectRows属性来判断是否插入数据成功
        console.log('更新成功！');
    }

}) */

//删除语句
// 定义SQL语句
/* const sqlStr = 'delete from users where id=?'
// 执行SQL语句
db.query(sqlStr,5,(err,results)=>{
    if(err) return console.log(err.message);
    // 执行成功
    // 如果执行的是delete 语句删除语句，则results是一个对象
    if(results.affectedRows === 1){
        // 可以通过affectRows属性来判断是否删除数据成功
        console.log('删除成功！');
    }

})  */


// 标记删除
 const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,6],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('标记删除成功！');
    }

})  


