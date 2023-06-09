const user = require("../model/user");

exports.index = (req, res) => {
  //views/index.ejs
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.signin = (req, res) => {
  //views/signin.ejs
  res.render("signin");
};

//회원가입
exports.Cpost_signup = (req, res) => {
  //모델에서 만든 모듈
  user.Mpost_signup(req.body, () => {
    res.send({ result: true });
  });
};
//로그인
exports.Cpost_signin = (req, res) => {
  //value는 user.Mpost_signin의 rows임
  user.Mpost_signin(req.body, function(value) {
      if (value.length > 0) {
          res.send({result: true, data : value[0]});
      } else {
          res.send({result:false, data:value});
      }
  })}

//회원정보
exports.Cpost_profile = (req, res) => {
  user.Mpost_profile(req.body, (value) => {
    console.log(req.body);
    if (value.length > 0) {
      res.render("profile", { result: true, data: value[0] });
      // res.send({ result: true, ...value });
    } else {
      res.send({ result: false });
    }
  });
};
//회원수정
exports.Cedit_profile = (req, res) => {
  user.Medit_profle(req.body, () => {
    res.send({ result: true });
  });
};
//회원삭제
exports.Cdel_profile = (req, res) => {
  user.Mdel_profile(req.body, () => {
    res.send({ result: true });
  });
};
