const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'abc',
    password: '1234',
    database: 'sibal'
});

//POST : localhost:8080/user/signup
exports.Mpost_signup = function(data, call) {
    const query = `INSERT INTO user (userid, name, pw) VALUES ( '${data.userid}', '${data.name}', '${data.pw}' )`;

    conn.query(query, (err, rows)=> {
        if (err) {
            console.log(err);
        }
        console.log("Mpost_signup", rows);
        //rows 콜함수로 반환해준거임
        call(rows);
    })
}
//data는 외부에서 받아온 데이터임.
//POST : localhost:8080/user/signin
exports.Mpost_signin = function(data, call) {
    const query = `SELECT * FROM user where userid='${data.userid}' and pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log('err', err)
        }
        console.log("Mpost_signin", rows[0]);
        call(rows);
    })
}