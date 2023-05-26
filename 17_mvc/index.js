const express = require("express");
const app = express();
const PORT = 8000;
//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//router 분리
//미들웨어, 라우터는 하나의 독립된 기능을 가진 함수
const indexRoute = require("./routes");
app.use("/", indexRoute);
// //GET
// app.get("/", function (req, res) {
//   res.render("index");
// });
//404
app.get("*", function (req, res) {
  res.render("404");
});
//PORT
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});