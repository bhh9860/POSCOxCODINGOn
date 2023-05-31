const mysql = require("mysql");

//DB 연결
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'abc',
    password : '1234',
    database : 'sibal'
})

//user들 전체 보이기
//GET
exports.MgetUser = function(callback) {
    conn.query(`SELECT * FROM user`, function (err, rows) {
        if (err) {
            console.log('에러는', err);
        }
        // console.log("MgetUser: ", rows);
        callback(rows);
    })
}