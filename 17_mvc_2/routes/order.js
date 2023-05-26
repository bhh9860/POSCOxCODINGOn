const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

//localhost:8000/order/
router.get("/", controller.user);
// router.get('/list', )
// router.post('/cart')
// router.delete("/:id", controller)

// //localhost:8000/user/age
// router.get("/age", 컨트롤러 함수)

module.exports = router;
