const mysql = require('mysql')
const dbConfig = require('../config.js').db
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
})

var sql = "select * from user where username=? and password=?"
var sqlParams = ['abc', 'abc']
var res
connection.query(sql, sqlParams, function (err, result) {
    if(err) {
        throw err
    }
    console.log(result)
    res = result
})

exports.res = res