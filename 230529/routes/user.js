const express = require("express");
//컨트롤러와 연결!
const controller = require("../controller/user");
const router = express.Router();

//GET localhost:8080/user
//컨트롤러의 index모듈 쓰는거임
router.get("/", controller.index);

//GET localhost:8080/user/signup
router.get("/signup", controller.signup);
//POST localhost:8080/user/signup
router.post("/signup", controller.Cpost_signup);

//GET localhost:8080/user/signin
router.get("/signin", controller.signin);
//POST localhost:8080/user/signin
router.post("/signin", controller.Cpost_signin);

//모듈 빼서 쓸 수 있게(지금은 최상단 index.js가 씀)
module.exports = router;