const userModel = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(userModel);
  console.log(userModel.users.split("\n"));
  const userDatas = userModel.users.split("\n");

  const users = []; //사용자 전체
  const userIds = []; //아이디만
  for (const user of userDatas) {
    users.push({
      id: user.split("//")[0],
      pw: user.split("//")[1],
      name: user.split("//")[2],
    });
    userIds.push(user.split("//")[0]);
  }
  console.log(users);
  console.log(userIds);

  //아이디 일치확인
  const idx = userIds.indexOf(req.body.id);
  console.log(idx);
  if (idx !== -1) {
    console.log("아이디있음");
    if (users[idx].pw === req.body.pw) {
      res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
    } else {
      res.send({ result: false, msg: "로그인 실패" });
    }
  } else {
    console.log("아이디없음");
    res.send({ result: false });
  }

  //   if (
  //     req.body.id === userModel.users()[0].id &&
  //     req.body.pw === userModel.users()[0].pw
  //   ) {
  //     res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
  //   } else {
  //     res.send({ result: false, msg: "로그인 실패" });
  //   }
};
