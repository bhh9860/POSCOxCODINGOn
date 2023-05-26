const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

// "/", "/comments", "/comment/:page"
// //GET
// app.get("/", function (req, res) {
//     res.render("index");
//   });

//   app.get("/comments", function (req, res) {
//     console.log(comments);
//     res.render("comments", { commentInfos: comments });
//   });

//   app.get("/comment/:page", function (req, res) {
//     //console.log(req.params);
//     const commentId = req.params.page;
//     //console.log(comments[commentId - 1]);

//     if (commentId < 1 || commentId > comments.length) {
//       res.render("404");
//     }

//     if (isNaN(commentId)) {
//       res.render("404");
//     }

//     res.render("comment", { commentInfo: comments[commentId - 1] });
//   });

//localhost:8000/
router.get("/", controller.main);
//localhost:8000/comments
router.get("/comments", controller.comments);
//localhost:8000/comments/:page
router.get("/comment/:page", controller.comment);

module.exports = router;
