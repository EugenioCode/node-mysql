const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3090,
  user: 'root',
  password: 'root',
  database: 'practice'
})

// connection.query('SELECT * FROM customers', (err, results,fields) => {
//   console.log(results)
// })

// connection.query('select * from customers where name like ?', ['%丽'], (err, results, fields) => {
//   console.log(results)
// })

// connection.execute('INSERT INTO customers (name) VALUES (?)', ['迪迦奥特曼'], (err, results, fields) => {
//   console.log(err)
// })

// connection.execute('UPDATE customers SET name="艾斯" where name="迪迦"', (err, reesults, fields) => {
//   console.log(err)
// })

connection.execute('delete from customers where name=?', ['hello world'], err => {
  console.log(err)
})

connection.execute