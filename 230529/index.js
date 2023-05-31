const express = require("express");
const app = express();
const PORT = 8080;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"))
//body-parser
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//routes 연결
//localhost:8080/user
const userRouter = require("./routes/user")
//얘는 주소이다. 파일이 아니다.
app.use("/user", userRouter);

app.get("*", function(req, res) {
    //views/404.ejs
    res.render("404");
});

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`)
})