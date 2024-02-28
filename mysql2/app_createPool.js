const mysql = require('mysql2')


const connection = mysql.createPool({
  host: '127.0.0.1',
  port: 3090,
  user: 'root',
  password: 'root',
  database: 'practice',
  waitForConnections: true, // waitForConnections 是指如果现在没有可用连接了，那就等待，设置为 false 就是直接返回报错。
  connectionLimit: 10, // connectionLimit 是指定最多有多少个连接，比如 10 个，那就是只能同时用 10个，再多需要排队等
  maxIdle: 10, // maxIdle 是指定最多有多少个空闲的，超过这个数量的空闲连接会被释放
  idleTimeout: 60000, // idleTimeout 是指空闲的连接多久会断开
  queueLimit: 0, // queueLimit 是可以排队的请求数量，超过这个数量就直接返回报错说没有连接了。设置为 0 就是排队没有上限。
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
})

connection.query('SELECT * FROM customers', (err, results,fields) => {
  console.log(results)
})

connection.query('select * from customers where name like ?', ['%丽'], (err, results, fields) => {
  console.log(results)
})

// connection.execute('INSERT INTO customers (name) VALUES (?)', ['迪迦奥特曼'], (err, results, fields) => {
//   console.log(err)
// })

// connection.execute('UPDATE customers SET name="艾斯" where name="迪迦"', (err, reesults, fields) => {
//   console.log(err)
// })

// connection.execute('delete from customers where name=?', ['hello world'], err => {
//   console.log(err)
// })
