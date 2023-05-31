//모델이랑 연결
const user = require("../model/user");

exports.index = function(req, res) {
    //views/index.ejs
    res.render("index");
};

exports.signup = (function(req, res) {
    //views/signup.ejs
    res.render("signup");
})

exports.Cpost_signup = (req, res) => {
    //모델에서 만든 모듈
    user.Mpost_signup(req.body, function() {
        res.send({result: true, data : req.body});
    });
};

exports.signin = (function(req, res) {
    //views/signin.ejs
    res.render("signin");
});

exports.Cpost_signin = (req, res) => {
    //value는 user.Mpost_signin의 rows임
    user.Mpost_signin(req.body, function(value) {
        if (value.length > 0) {
            res.send({result: true, data : value});
        } else {
            res.send({result:false, data:value});
        }
})}