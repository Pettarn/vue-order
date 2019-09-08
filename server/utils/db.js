const mysql = require('mysql')
const dbConfig = require('../config.js').db

const pool = mysql.createPool({
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host
})


let query = function (sql, value) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if(err) {
                resolve(err)
            } else {
                connection.query(sql, value, function (err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
            
        })
    })
}

module.exports = {
    query
}