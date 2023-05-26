const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

router.get("/", controller.main);
router.post("/login", controller.login);

module.exports = router;

// app.get("/", (req, res) => {
//     res.render("index");
//   });

//   app.post("/login", (req, res) => {
//     console.log(req.body);
//     // if (req.body.id !== id) {
//     //   res.send({ result: false, msg: "존재하지 않는 사용입니다" });
//     // }
//     if (req.body.id === id && req.body.pw === pw) {
//       res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
//     } else {
//       res.send({ result: false, msg: "로그인 실패" });
//     }
//   });
